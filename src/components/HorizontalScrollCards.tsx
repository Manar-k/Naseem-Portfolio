import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export interface HorizontalScrollCardItem {
  image: string
  alt: string
  text: string
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
function Card({ image, alt, text, index, total, scrollYProgress }: CardProps) {
  const segLen = 1 / total
  const segStart = index * segLen
  const transitionFrac = 0.45
  const settleAt = index === 0 ? 0 : segStart + segLen * transitionFrac
  const revealEnd = settleAt + segLen * (1 - transitionFrac) * 0.5

  const scrimOpacity = useTransform(scrollYProgress, [settleAt, revealEnd], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [settleAt, revealEnd], [0, 1])
  const textY = useTransform(scrollYProgress, [settleAt, revealEnd], [20, 0])

  return (
    <div
      // Mobile/tablet: one card fills the slide (matches the original single-card
      // pace, no peek). Laptop only: narrower, so the next card's edge peeks in.
      className="relative flex h-full w-full shrink-0 items-center justify-center lg:w-[58vw]"
    >
      <div className="relative w-full overflow-hidden rounded-sm bg-surface-2 shadow-2xl sm:rounded-md">
        {/* Mobile/tablet: natural aspect ratio, whole photo always visible.
            Laptop: fixed-height box, image covers it edge-to-edge. */}
        <img
          src={image}
          alt={alt}
          className="block max-h-[70vh] w-full object-contain lg:h-[65vh] lg:object-cover"
        />
        <motion.div
          style={{ opacity: scrimOpacity }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
        />
        <motion.p
          style={{ opacity: textOpacity, y: textY }}
          className="absolute bottom-4 right-4 max-w-[38ch] text-right font-display text-[clamp(13px,1.8vw,20px)] font-bold leading-[1.7] text-white sm:bottom-8 sm:right-8"
        >
          {text}
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

    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(track)
    return () => resizeObserver.disconnect()
  }, [reducedMotion])

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
      <div dir="ltr" className={`flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-10 ${className}`}>
        {items.map((item, i) => (
          <div key={i} className="relative w-[85vw] shrink-0 snap-center overflow-hidden rounded-sm bg-surface-2 shadow-2xl sm:w-[60vw] sm:rounded-md lg:w-[45vw]">
            <img src={item.image} alt={item.alt} className="block max-h-[70vh] w-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <p className="absolute bottom-4 right-4 max-w-[38ch] text-right font-display text-[clamp(13px,1.8vw,20px)] font-bold leading-[1.7] text-white sm:bottom-8 sm:right-8">
              {item.text}
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
      dir="ltr"
      className={`relative ${className}`}
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div ref={trackRef} className="flex h-full items-center gap-4 px-6 sm:gap-6 sm:px-10" style={{ x: trackX }}>
          {items.map((item, i) => (
            <Card key={i} {...item} index={i} total={total} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}