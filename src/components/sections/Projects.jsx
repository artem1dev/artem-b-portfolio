import { ExternalLink, Lock, Star } from 'lucide-react'
import { Github } from '../BrandIcons'
import Section from '../Section'
import { projects } from '../../data/content'

/** yookilabs.com reads better on a link than "live demo". */
function siteName(url) {
  return new URL(url).hostname.replace(/^www\./, '')
}

function ProjectEntry({ project, index }) {
  const { live, github } = project.links

  return (
    <article className="grid gap-x-8 gap-y-4 border-t border-line py-7 last:pb-2 sm:grid-cols-[auto_1fr]">
      <span
        className="font-mono text-xs text-muted sm:pt-1.5"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-2xl text-primary">{project.title}</h3>

          {project.featured && (
            <span className="flex items-center gap-1 rounded-sm bg-(--accent-glow) px-1.5 py-0.5 font-mono text-[10px] text-accent">
              <Star size={9} className="fill-current" />
              featured
            </span>
          )}

          {project.nda && (
            <span className="flex items-center gap-1 rounded-sm border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
              <Lock size={9} />
              NDA
            </span>
          )}
        </div>

        <p className="mt-1 font-mono text-xs text-accent">
          {project.subtitle}
          {project.period && (
            <span className="text-muted"> · {project.period}</span>
          )}
        </p>

        <p className="mt-4 leading-relaxed text-secondary">{project.summary}</p>

        <ul className="mt-4 space-y-2">
          {project.details.map((d, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-secondary"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-muted">
          {project.stack.map((t, i) => (
            <span key={t}>
              {t}
              {i < project.stack.length - 1 && (
                <span className="ml-3 text-line" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        {(live || github) && (
          <div className="mt-5 flex flex-wrap gap-5">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring link-underline flex items-center gap-1.5 pb-0.5 font-mono text-xs text-primary"
              >
                <ExternalLink size={12} className="text-accent" />
                {siteName(live)}
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring link-underline flex items-center gap-1.5 pb-0.5 font-mono text-xs text-primary"
              >
                <Github size={12} className="text-accent" />
                source
              </a>
            )}
          </div>
        )}

        {project.nda && !live && !github && (
          <p className="mt-5 font-mono text-xs text-muted">
            Links withheld under NDA — happy to walk through the work in a call.
          </p>
        )}
      </div>
    </article>
  )
}

export default function Projects({ index }) {
  return (
    <Section id="work" title="Selected work" index={index}>
      <div>
        {projects.map((p, i) => (
          <ProjectEntry key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
