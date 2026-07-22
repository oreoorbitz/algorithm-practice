import { marked } from 'marked'
// Vite ?raw suffix inlines the file's text content at build time.
import planText from '../plan.md?raw'

// Render markdown and inject into the #plan article element.
const el = document.getElementById('plan')
el.innerHTML = marked.parse(planText)
