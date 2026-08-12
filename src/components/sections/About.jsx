import Section from '../Section'
import { about } from '../../data/content'

export default function About({ index }) {
  return (
    <Section id="about" title={about.headline} index={index}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-secondary">
              {p}
            </p>
          ))}
        </div>

        {/* Stats read as a stacked ledger rather than a card grid — the rule
            between rows carries the structure. */}
        <dl className="self-start">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
            >
              <dt className="font-mono text-xs text-muted">{s.label}</dt>
              <dd className="text-xl font-semibold tracking-tight text-primary">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
