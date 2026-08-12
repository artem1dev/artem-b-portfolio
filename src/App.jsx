import { useMemo } from 'react'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { useScrollSpy } from './hooks/useScrollSpy'
import { nav, profile } from './data/content'

/** Sections in page order. The array position drives both the rendering order
 *  and the `01 / 02 / …` number in each section heading, so reordering here is
 *  the only change needed to renumber the page. The `key` is spelled out rather
 *  than taken from the component name, which a production build mangles. */
const SECTIONS = [
  { key: 'about', Component: About },
  { key: 'work', Component: Projects },
  { key: 'skills', Component: Skills },
  // Experience is omitted while `experience` in data/content.js is empty — see
  // the note there; add `{ key: 'experience', Component: Experience }` and the
  // matching `nav` entry back once it has real roles in it.
  { key: 'education', Component: Education },
  { key: 'contact', Component: Contact },
]

export default function App() {
  const ids = useMemo(() => nav.map((n) => n.id), [])
  const activeId = useScrollSpy(ids)

  return (
    <div className="min-h-screen bg-bg">
      <div className="grid-backdrop" aria-hidden="true" />

      <a
        href="#content"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:border focus:border-accent focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-primary"
      >
        Skip to content
      </a>

      <TopNav activeId={activeId} />

      <main
        id="content"
        className="relative z-10 mx-auto max-w-5xl px-5 pt-(--nav-height) sm:px-8"
      >
        <Hero />
        {SECTIONS.map(({ key, Component }, i) => (
          <Component key={key} index={i + 1} />
        ))}
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted sm:px-8">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React, Vite and Tailwind CSS</span>
        </div>
      </footer>
    </div>
  )
}
