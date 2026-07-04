import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  title: string
  intro?: ReactNode
  align?: 'start' | 'center'
  size?: 'md' | 'lg'
  id?: string
}

export function SectionHeading({ title, intro, align = 'start', size = 'lg', id }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-start'
  const titleSize = size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass}`}>
      <Reveal>
        <h2
          id={id}
          className={`font-display font-medium leading-[1.08] tracking-tightest text-ink ${titleSize}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.08}>
          <p className="text-balance text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
