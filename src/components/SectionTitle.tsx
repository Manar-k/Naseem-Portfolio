import { Reveal } from './Reveal'

interface SectionTitleProps {
  title: string
  className?: string
}

/** Centered heading flanked by hairlines, e.g. "─── About Me ───". No numbering. */
export function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <Reveal>
      <div className={`flex items-center justify-center gap-5 sm:gap-8 ${className}`}>
        <span className="h-px flex-1 max-w-[6rem] bg-ink/20 sm:max-w-[10rem]" aria-hidden />
        <h2 className="m-0 shrink-0 text-center font-display text-[clamp(24px,3vw,42px)] font-black leading-[1.3] text-ink">
          {title}
        </h2>
        <span className="h-px flex-1 max-w-[6rem] bg-ink/20 sm:max-w-[10rem]" aria-hidden />
      </div>
    </Reveal>
  )
}