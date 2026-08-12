import Section from '../Section'
import { experience } from '../../data/content'

export default function Experience({ index }) {
  return (
    <Section id="experience" title="Experience" index={index}>
      {/* Timeline rail: the border on the list draws the line, each entry's
          marker sits on top of it. */}
      <ol className="border-l border-line">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[4.5px] size-2 rounded-full ${
                job.current ? 'bg-accent' : 'bg-line-hover'
              }`}
            />

            <p className="font-mono text-xs text-muted">
              {job.period}
              {job.location && <span> · {job.location}</span>}
            </p>

            <h3 className="mt-1.5 text-xl text-primary">{job.role}</h3>
            <p className="mt-0.5 text-sm text-accent">{job.company}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-secondary"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-line-hover" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
