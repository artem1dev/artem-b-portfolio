import { motion } from 'framer-motion'

/**
 * A page section headed by a numbered rule — `01 / About ───────` — with a
 * fade-up reveal the first time it scrolls into view.
 * `index` is the section's position in the page, used for the number.
 */
export default function Section({
  id,
  title,
  index,
  children,
  className = '',
}) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-6 sm:py-9 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="text-2xl text-primary">{title}</h2>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      {children}
    </motion.section>
  )
}
