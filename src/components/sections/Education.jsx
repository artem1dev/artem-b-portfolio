import Section from '../Section'
import { education, languages } from '../../data/content'

export default function Education({ index }) {
  return (
    <Section id="education" title="Education" index={index}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <ul>
          {education.map((e) => (
            <li key={e.degree} className="border-t border-line py-5">
              <h3 className="text-lg text-primary">{e.degree}</h3>
              <p className="mt-1 text-sm text-secondary">{e.school}</p>
              {e.period && (
                <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
              )}
            </li>
          ))}
        </ul>

        <dl className="self-start">
          <p className="border-t border-line py-3 font-mono text-xs tracking-wide text-muted uppercase">
            Languages
          </p>
          {languages.map((l) => (
            <div
              key={l.name}
              className="flex items-baseline justify-between gap-4 border-t border-line py-3.5"
            >
              <dt className="text-sm text-primary">{l.name}</dt>
              <dd className="font-mono text-xs text-muted">{l.level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
