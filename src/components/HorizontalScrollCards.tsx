import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useLang } from '../hooks/useLang'

export interface HorizontalScrollCardItem {
  image: string
  alt: string
  text: string
  boldPrefix?: string
}

interface HorizontalScrollCardsProps {
  items: HorizontalScrollCardItem[]
  className?: string
}

interface CardProps extends HorizontalScrollCardItem {
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

/** One slide: image slides fully into place, then its caption/scrim fade in and hold. */
function Card({ image, alt, text, boldPrefix, index, total, scrollYProgress }: CardProps) {
  const segLen = 1 / total
  const segStart = index * segLen
  const transitionFrac = 0.45
  const settleAt = index === 0 ? 0 : segStart + segLen * transitionFrac
  const revealEnd = settleAt + segLen * (1 - transitionFrac) * 0.5

  const scrimOpacity = useTransform(scrollYProgress, [settleAt, revealEnd], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [settleAt, revealEnd], [0, 1])
  const textY = useTransform(scrollYProgress, [settleAt, revealEnd], [20, 0])
  const { lang } = useLang()
  return (
    <div className="relative flex h-full shrink-0 items-center justify-center"
    dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/*
        All source photos are a consistent 4:5 ratio, so sizing the box to that
        exact ratio means object-cover never actually crops anything -- the
        full image always shows. The box's height (not width) is set per
        breakpoint; width follows automatically from the ratio. On phones that
        yields a near-full-width single card; on laptops a narrower card, so
        ~2 fit fully on screen with a peek of the next -- a visual cue that
        the row keeps going.
      */}
      <div className="group relative h-[50vh] aspect-[4/5] overflow-hidden border-2 border-ink/20 bg-surface-2 shadow-2xl transition-shadow duration-300 hover:border-ink/50 hover:shadow-[0_0_35px_rgba(237,230,214,0.35)] sm:h-[64vh] lg:h-[70vh]">
        <img src={image} alt={alt} className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <motion.div
          style={{ opacity: scrimOpacity }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:!opacity-100"
        />
        <motion.p
  style={{ opacity: textOpacity, y: textY }}
  className="absolute bottom-4 rtl:right-4 ltr:left-4 max-w-[38ch] rtl:text-right ltr:text-left font-display text-[clamp(11px,1.4vw,16px)] leading-[1.7] text-surfase group-hover:!opacity-100 !translate-y-0 transition-transform duration-300 sm:bottom-8 sm:right-8"
>
  {boldPrefix && <span className="text-white font-extrabold">{boldPrefix} </span>}
  <span className="font-medium">{text}</span>
</motion.p>
      </div>
    </div>
  )
}

/**
 * Horizontal-scroll gallery: pinned via `position: sticky` inside a tall
 * wrapper (one viewport-height of scroll per card), the card track slides
 * left in lockstep with scroll -- each card slides fully into place, then its
 * caption/scrim overlaid on its bottom-right corner fades in and holds until
 * the next card's turn begins. Card width (and so how much of the next card
 * peeks in) is set by CSS breakpoints, so the slide distance is measured from
 * the actual rendered layout rather than assumed, keeping the motion accurate
 * at every screen size.
 */
export function HorizontalScrollCards({ items, className = '' }: HorizontalScrollCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const total = items.length
  const [step, setStep] = useState(0)
  const { lang } = useLang()

  useEffect(() => {
    if (reducedMotion) return
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined
      const second = track.children[1] as HTMLElement | undefined
      if (!first) return
      const firstLeft = first.getBoundingClientRect().left
      setStep(second ? second.getBoundingClientRect().left - firstLeft : first.getBoundingClientRect().width)
    }
    const raf = requestAnimationFrame(measure)
  const resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(track)
  return () => {
    cancelAnimationFrame(raf)
    resizeObserver.disconnect()
  }
  }, [reducedMotion, lang])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const segLen = 1 / total
  const transitionFrac = 0.45
  const xInput: number[] = [0]
  const xOutput: number[] = [0]
  for (let i = 1; i < total; i++) {
    const segStart = i * segLen
    const segMid = segStart + segLen * transitionFrac
    xInput.push(segStart, segMid)
    xOutput.push(-(i - 1) * step, -i * step)
  }
  xInput.push(1)
  xOutput.push(-(total - 1) * step)
  const trackX = useTransform(scrollYProgress, xInput, xOutput)

  if (reducedMotion) {
    return (
      <div className={`flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-10 ${className}`}>
        {items.map((item, i) => (
          <div key={i} className="relative h-[50vh] aspect-[4/5] shrink-0 snap-center overflow-hidden rounded-sm bg-surface-2 shadow-2xl sm:h-[64vh] sm:rounded-md lg:h-[70vh]">
            <img src={item.image} alt={item.alt} className="block h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <p className="absolute bottom-4 rtl:right-4 ltr:left-4 max-w-[38ch] rtl:text-right ltr:text-left font-display text-[clamp(11px,1.4vw,16px)] leading-[1.7] text-white group-hover:!opacity-100 sm:bottom-8 sm:right-8">
                {item.boldPrefix && <span className="font-black">{item.boldPrefix} </span>}
  <span className="font-medium">{item.text}</span>
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      data-horizontal-scroll
      className={`relative ${className}`}
      style={{ height: `${total * 100}vh` }}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div ref={trackRef} className="flex h-full items-center gap-4 px-0 sm:gap-6 sm:px-10" style={{ x: trackX }}>
          {items.map((item, i) => (
            <Card key={i} {...item} index={i} total={total} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}