import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import Avatar from './Avatar'
import SocialLinks from './SocialLinks'
import { hero, profile } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-var(--nav-height))] items-center py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16"
      >
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-5xl leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-xl text-2xl leading-snug font-normal tracking-tight text-secondary sm:text-3xl">
            {hero.headline}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-secondary">
            {hero.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {profile.available && (
              <span className="flex items-center gap-2">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {profile.availableText}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {profile.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="focus-ring flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-85"
            >
              View work
              <ArrowDown size={15} />
            </a>

            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="focus-ring flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={15} />
                Download CV
              </a>
            )}

            <SocialLinks className="ml-1" />
          </div>
        </div>

        <Avatar className="w-44 shrink-0 sm:w-56 lg:w-64" />
      </motion.div>
    </section>
  )
}
