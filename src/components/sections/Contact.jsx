import { ArrowUpRight } from 'lucide-react'
import Section from '../Section'
import SocialLinks from '../SocialLinks'
import { contact, social } from '../../data/content'

export default function Contact({ index }) {
  return (
    <Section id="contact" title="Contact" index={index}>
      <h3 className="max-w-2xl text-4xl leading-tight text-primary sm:text-5xl">
        {contact.headline}
      </h3>

      <p className="mt-5 max-w-xl leading-relaxed text-secondary">
        {contact.text}
      </p>

      <a
        href={`mailto:${social.email}`}
        className="focus-ring link-underline mt-8 inline-flex items-baseline gap-2 pb-1 font-mono text-lg text-primary sm:text-xl"
      >
        {social.email}
        <ArrowUpRight size={16} className="shrink-0 self-center text-accent" />
      </a>

      <SocialLinks labelled className="mt-9" />
    </Section>
  )
}
