import { Mail } from 'lucide-react'
import { Github, Linkedin, Telegram } from './BrandIcons'
import { social } from '../data/content'

const links = [
  { key: 'email', label: 'Email', icon: Mail, href: `mailto:${social.email}` },
  { key: 'github', label: 'GitHub', icon: Github, href: social.github },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: social.linkedin },
  { key: 'telegram', label: 'Telegram', icon: Telegram, href: social.telegram },
].filter((l) => Boolean(social[l.key]))

/** `labelled` spells the network out next to the mark — used in the footer,
 *  where there is room for it. Elsewhere the icons stand alone. */
export default function SocialLinks({
  size = 15,
  labelled = false,
  className = '',
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          {...(key !== 'email'
            ? { target: '_blank', rel: 'noreferrer noopener' }
            : {})}
          className={`focus-ring flex items-center gap-2 rounded-md border border-line text-secondary transition-colors hover:border-accent hover:text-accent ${
            labelled ? 'px-3 py-1.5 text-sm' : 'size-9 justify-center'
          }`}
        >
          <Icon size={size} />
          {labelled && label}
        </a>
      ))}
    </div>
  )
}
