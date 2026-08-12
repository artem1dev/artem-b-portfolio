import { useState } from 'react'
import { profile } from '../data/content'

/**
 * Profile photo in an offset accent frame — the outlined square sits behind and
 * below the picture rather than around it.
 * Falls back to initials when `profile.photo` is null or the file fails to
 * load, so the page never shows a broken-image box.
 *
 * The photo is displayed square (`object-cover`); crop it to 1:1 beforehand if
 * you don't want the top and bottom trimmed.
 */
export default function Avatar({ className = 'w-56' }) {
  const [failed, setFailed] = useState(!profile.photo)

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .replace(/[^A-Za-z]/g, '')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-accent"
      />
      <div
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-line"
        style={{
          background:
            'linear-gradient(140deg, var(--avatar-from) 0%, var(--avatar-to) 100%)',
        }}
      >
        {failed ? (
          <span className="text-5xl font-semibold tracking-tight text-accent">
            {initials}
          </span>
        ) : (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            // The source is a tall portrait, so a centred square crop would cut
            // the top of the head off — bias the crop upward instead.
            className="size-full object-cover object-[center_15%]"
          />
        )}
      </div>
    </div>
  )
}
