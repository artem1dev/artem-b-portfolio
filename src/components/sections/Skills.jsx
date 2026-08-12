import Section from '../Section'
import { skills } from '../../data/content'

export default function Skills({ index }) {
  return (
    <Section id="skills" title="Skills" index={index}>
      <dl>
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-x-8 gap-y-2 border-t border-line py-5 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="font-mono text-xs text-muted sm:pt-1">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-x-2.5 gap-y-1.5">
              {group.items.map((item, i) => (
                <span key={item} className="text-sm text-secondary">
                  {item}
                  {i < group.items.length - 1 && (
                    <span className="ml-2.5 text-line" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
