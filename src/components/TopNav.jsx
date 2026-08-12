import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { nav, profile } from '../data/content'

/** Initials for the wordmark, e.g. "Ada Lovelace" → "AL". */
const monogram = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .replace(/[^A-Za-z]/g, '')
  .slice(0, 2)
  .toUpperCase()

export default function TopNav({ activeId }) {
  const [open, setOpen] = useState(false)

  // The drawer is a fixed overlay, so the page behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-(--nav-height) max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="focus-ring font-mono text-sm tracking-[0.2em] text-primary"
        >
          {monogram}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className={`focus-ring text-sm transition-colors hover:text-primary ${
                activeId === item.id ? 'text-primary' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="focus-ring flex size-9 items-center justify-center rounded-md border border-line text-secondary transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
          >
            <div className="flex h-(--nav-height) items-center justify-end px-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="focus-ring flex size-9 items-center justify-center rounded-md border border-line text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="flex flex-col px-5">
              {nav.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="focus-ring flex items-baseline gap-4 border-b border-line py-5 text-3xl font-semibold tracking-tight text-primary"
                >
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
