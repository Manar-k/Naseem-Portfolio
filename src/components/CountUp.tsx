import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface CountUpProps {
  value: string
  className?: string
  dir?: 'ltr' | 'rtl'
}

const NUMERIC_PATTERN = /^(\D*)(\d+)(\D*)$/

/**
 * Animates the digits of a stat value on scroll-into-view (draws the eye to
 * the achievement numbers, the section's whole point). Falls back to the
 * static final value under reduced motion. Uses a motion value bound
 * directly to text content so it never touches React state per frame.
 */
export function CountUp({ value, className, dir }: CountUpProps) {
  const match = value.match(NUMERIC_PATTERN)
  const target = match ? Number(match[2]) : 0

  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
  const reducedMotion = useReducedMotion()
  const count = useMotionValue(reducedMotion ? target : 0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toString())

  useEffect(() => {
    if (!match || !inView || reducedMotion) return
    const controls = animate(count, target, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [match, inView, reducedMotion, count, target])

  if (!match) {
    return (
      <span ref={ref} className={className} dir={dir}>
        {value}
      </span>
    )
  }

  const [, prefix, , suffix] = match

  return (
    <span ref={ref} className={className} dir={dir}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
