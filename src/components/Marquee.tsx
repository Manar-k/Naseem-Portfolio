import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useLang } from '../hooks/useLang'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface MarqueeProps {
  items: string[]
}

/**
 * Full-bleed accent band with an infinitely scrolling row of short labels.
 * Content is duplicated once so the CSS animation can loop seamlessly;
 * freezes in place under reduced motion instead of looping forever.
 */
export function Marquee({ items }: MarqueeProps) {
  const { lang } = useLang()
  const reducedMotion = useReducedMotion()
  const Chevron = lang === 'ar' ? IconChevronLeft : IconChevronRight

  const track = (
    <div className="flex shrink-0 items-center gap-12 pe-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-12">
          <span className="font-display text-xl font-extrabold whitespace-nowrap text-white sm:text-2xl">
            {item}
          </span>
          <Chevron className="h-5 w-5 shrink-0 text-white/70" stroke={2} />
        </span>
      ))}
    </div>
  )

  return (
    <div className="overflow-hidden bg-accent py-4">
      <div
        className={`flex w-max ${reducedMotion ? '' : 'animate-marquee'}`}
        style={{ direction: 'ltr' }}
      >
        {track}
        {track}
      </div>
    </div>
  )
}
