import { html, headings, meta } from '../plan.md?rendered'
// Prism theme (client-side only — the highlighting itself is done at build time).
import 'prismjs/themes/prism-tomorrow.css'
import mermaid from 'mermaid'

// ---------------------------------------------------------------------------
// 1. Inject rendered markdown into the page.
// ---------------------------------------------------------------------------
const article = document.getElementById('plan')
article.innerHTML = html

// Reading-time metadata in the navbar.
const metaEl = document.getElementById('meta')
if (metaEl) {
  metaEl.textContent = `${meta.text} · 5 authors`
}

// ---------------------------------------------------------------------------
// 2. Build the table of contents from the extracted headings.
// ---------------------------------------------------------------------------
const tocList = document.getElementById('toc-list')
for (const h of headings) {
  const li = document.createElement('li')
  li.setAttribute('data-toc-id', h.id)
  const a = document.createElement('a')
  a.href = `#${h.id}`
  a.textContent = h.text
  a.className = h.depth === 3 ? 'pl-6 text-xs' : 'pl-3 text-sm font-medium'
  // smooth-scroll with sticky-nav offset handled via CSS scroll-margin-top.
  a.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${h.id}`)
  })
  li.appendChild(a)
  tocList.appendChild(li)
}

// ---------------------------------------------------------------------------
// 3. Render mermaid diagrams (client-side; they need a DOM).
// ---------------------------------------------------------------------------
mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' })
await mermaid.run({ querySelector: '.mermaid' })

// ---------------------------------------------------------------------------
// 4. Scroll-spy: highlight the active TOC entry as you scroll.
// ---------------------------------------------------------------------------
const tocItems = [...tocList.querySelectorAll('li[data-toc-id]')]
const headingEls = headings
  .map((h) => document.getElementById(h.id))
  .filter(Boolean)

if (headingEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.id
        const item = tocItems.find((li) => li.dataset.tocId === id)
        if (!item) continue
        const link = item.querySelector('a')
        if (entry.isIntersecting) {
          tocItems.forEach((li) => li.querySelector('a')?.classList.remove('toc-active', 'text-primary', 'font-semibold'))
          link?.classList.add('toc-active', 'text-primary', 'font-semibold')
        }
      }
    },
    // Trigger when a heading is near the top of the viewport (under the navbar).
    { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
  )
  headingEls.forEach((el) => observer.observe(el))
}

// ---------------------------------------------------------------------------
// 5. Top scroll-progress bar.
// ---------------------------------------------------------------------------
const progress = document.getElementById('progress')
const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const ratio = docHeight > 0 ? scrollTop / docHeight : 0
  progress.style.transform = `scaleX(${ratio})`
}
window.addEventListener('scroll', updateProgress, { passive: true })
updateProgress()
