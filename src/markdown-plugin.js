import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import GithubSlugger from 'github-slugger'
import readingTime from 'reading-time'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-json.js'
import { readFileSync } from 'node:fs'

// Map common language aliases used in fenced code blocks to Prism grammar keys.
const LANG_ALIASES = {
  js: 'javascript',
  ts: 'typescript',
  sh: 'bash',
  shell: 'bash',
  py: 'python',
}

function resolveGrammar(lang) {
  if (!lang) return null
  const key = LANG_ALIASES[lang] ?? lang
  return Prism.languages[key] ?? null
}

/**
 * Highlight a fenced code block using Prism's DOM-free `highlight()`.
 * Returns the original code untouched when no matching grammar exists.
 */
function highlight(code, lang) {
  const grammar = resolveGrammar(lang)
  if (grammar) {
    const resolved = LANG_ALIASES[lang] ?? lang
    return Prism.highlight(code, grammar, resolved)
  }
  return code
}

/**
 * Build a configured Marked instance with:
 *  - build-time Prism syntax highlighting (no client-side flash)
 *  - GitHub-style heading anchors (dedup-aware, per document)
 *
 * Mermaid fences are handled in a post-processing step (transformMermaidBlocks)
 * rather than a code renderer override, since marked-highlight owns that renderer.
 *
 * @param {GithubSlugger} slugger  fresh slugger so each document dedups independently
 */
function createMarked(slugger) {
  const marked = new Marked()

  marked.use(
    markedHighlight({
      langPrefix: 'language-',
      emptyLangClass: '',
      highlight,
    })
  )

  marked.use({
    renderer: {
      // marked v18 signature: single token object { tokens, depth, raw }.
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        const id = slugger.slug(text)
        return `<h${depth} id="${id}">${text}</h${depth}>\n`
      },
    },
  })

  return marked
}

/**
 * Convert ```mermaid fenced code blocks (rendered by marked-highlight as
 * <pre><code class="language-mermaid">...</code></pre>) into the
 * <div class="mermaid"> elements that mermaid.run() expects.
 */
function transformMermaidBlocks(html) {
  const re = /<pre><code[^>]*language-mermaid[^>]*>([\s\S]*?)<\/code><\/pre>/gi
  return html.replace(re, (_m, code) => {
    const decoded = code
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
    return `<div class="mermaid">${decoded}</div>`
  })
}

/**
 * Convert blockquote-based callouts into styled alert cards.
 * Recognises lines starting with `> **Tip:**`, `> **Warning:**`,
 * `> **Key Idea:**`, `> **Note:**` (case-insensitive).
 */
const CALLOUT_RE =
  /<blockquote>\s*<p><strong>(Tip|Warning|Key Idea|Note):<\/strong>\s*([\s\S]*?)<\/p>\s*<\/blockquote>/gi

const CALLOUT_STYLES = {
  Tip: 'alert-info',
  Warning: 'alert-warning',
  'Key Idea': 'alert-success',
  Note: 'alert-info',
}

const CALLOUT_ICONS = {
  Tip: '💡',
  Warning: '⚠️',
  'Key Idea': '🎯',
  Note: '📝',
}

function applyCallouts(html) {
  return html.replace(CALLOUT_RE, (_m, type, body) => {
    const cls = CALLOUT_STYLES[type] ?? 'alert-info'
    const icon = CALLOUT_ICONS[type] ?? '📝'
    return `<div class="alert ${cls} shadow-sm callout"><span class="callout-icon">${icon}</span><div class="callout-body"><strong>${type}</strong> &mdash; ${body}</div></div>`
  })
}

/**
 * Extract the heading outline from rendered HTML so the client can build a TOC
 * without re-parsing markdown. Only h2/h3 are surfaced (keeps the TOC scannable).
 */
function extractHeadings(html) {
  // <h2 id="...">text</h2> — backreference \1 closes the same heading level.
  const re = /<h([23])\s+id="([^"]+)">([\s\S]*?)<\/h\1>/g
  const out = []
  let m
  while ((m = re.exec(html)) !== null) {
    out.push({
      depth: Number(m[1]),
      id: m[2],
      // strip any inline HTML tags from the visible label
      text: m[3].replace(/<[^>]+>/g, ''),
    })
  }
  return out
}

/**
 * Vite plugin: transform `*.md?rendered` imports into a JS module exporting
 * the rendered HTML, the heading outline, and reading metadata.
 *
 * Usage in main.js:
 *   import { html, headings, meta } from '../plan.md?rendered'
 */
export function markdownPlugin() {
  return {
    name: 'markdown-render',
    enforce: 'pre',

    // Track .md files in Vite's module graph so HMR fires when they change.
    // Without this, editing plan.md wouldn't trigger a reload (we read via fs,
    // so Vite doesn't see the dependency automatically).
    handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.md')) {
        // Full page reload is simplest — the rendered module is rebuilt on
        // the next request, and Mermaid/TOC re-initialise cleanly.
        ctx.server.ws.send({ type: 'full-reload' })
        return []
      }
    },

    async transform(src, id) {
      // Vite may append its own query params (e.g. `?import&rendered`), so
      // split on the first `?` and inspect the query string robustly.
      const qIdx = id.indexOf('?')
      if (qIdx === -1) return null
      const filePath = id.slice(0, qIdx)
      const query = id.slice(qIdx + 1)
      if (!filePath.endsWith('.md') || !query.includes('rendered')) return null

      // Read the raw markdown text directly. (Vite 8's ModuleInfo no longer
      // exposes `.code` to the transform hook, so we bypass the loader.)
      const md = readFileSync(filePath, 'utf-8')

      // A fresh slugger per render so duplicate headings dedup correctly.
      const slugger = new GithubSlugger()
      const marked = createMarked(slugger)

      let html = await marked.parse(md)
      html = transformMermaidBlocks(html)
      html = applyCallouts(html)

      const headings = extractHeadings(html)
      const meta = readingTime(md)

      // JSON.stringify neutralises backticks, ${}, and </script> sequences so
      // arbitrary markdown can never break the generated module.
      return {
        code:
          `export const html = ${JSON.stringify(html)};\n` +
          `export const headings = ${JSON.stringify(headings)};\n` +
          `export const meta = ${JSON.stringify(meta)};\n`,
        map: null,
      }
    },
  }
}
