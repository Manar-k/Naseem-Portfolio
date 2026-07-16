import { useRef } from 'react'
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
      className="relative flex h-full shrink-0 items-center justify-center px-6 sm:px-10"
      style={{ width: `${100 / total}%` }}
    >
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-sm shadow-2xl sm:rounded-md">
        <img src={image} alt={alt} className="block h-[42vh] w-full object-cover sm:h-[55vh] lg:h-[65vh]" />
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
 * the next card's turn begins.
 */
export function HorizontalScrollCards({ items, className = '' }: HorizontalScrollCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const total = items.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const segLen = 1 / total
  const transitionFrac = 0.45
  // Each card is (100/total)% of the track's own width, so a one-card shift
  // is that same percentage of the track -- not 100% (that would be the
  // track's *entire* width, six card-widths too far for a 6-card track).
  const cardStep = 100 / total
  const xInput: number[] = [0]
  const xOutput: string[] = ['0%']
  for (let i = 1; i < total; i++) {
    const segStart = i * segLen
    const segMid = segStart + segLen * transitionFrac
    xInput.push(segStart, segMid)
    xOutput.push(`${-(i - 1) * cardStep}%`, `${-i * cardStep}%`)
  }
  xInput.push(1)
  xOutput.push(`${-(total - 1) * cardStep}%`)
  const trackX = useTransform(scrollYProgress, xInput, xOutput)

  if (reducedMotion) {
    return (
      <div dir="ltr" className={`flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-10 ${className}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className="relative w-[85vw] shrink-0 snap-center overflow-hidden rounded-sm shadow-2xl sm:w-[60vw] sm:rounded-md lg:w-[45vw]"
          >
            <img src={item.image} alt={item.alt} className="block h-[42vh] w-full object-cover sm:h-[55vh]" />
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
        <motion.div className="flex h-full" style={{ width: `${total * 100}%`, x: trackX }}>
          {items.map((item, i) => (
            <Card key={i} {...item} index={i} total={total} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
