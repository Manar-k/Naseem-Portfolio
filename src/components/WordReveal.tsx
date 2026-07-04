import { motion, type Variants } from 'motion/react'
import type { ElementType } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface WordRevealProps {
  text: string
  className?: string
  wordClassName?: string
  /** Class applied only to words for which this returns true; others get wordClassName. */
  highlightWord?: (word: string, index: number) => boolean
  highlightClassName?: string
  as?: ElementType
  /** Reveal immediately on mount (hero headline) instead of on scroll-into-view. */
  onMount?: boolean
  stagger?: number
  delayChildren?: number
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.6em', rotate: 1.5, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
}

/**
 * Splits text into words and reveals them with a staggered blur/rotate/
 * translate entrance, matching the source design's headline treatment.
 * Falls back to a plain instant render under reduced motion.
 */
export function WordReveal({
  text,
  className = '',
  wordClassName = '',
  highlightWord,
  highlightClassName = 'text-accent',
  as: Tag = 'span',
  onMount = false,
  stagger = 0.06,
  delayChildren = 0,
}: WordRevealProps) {
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (reducedMotion) {
    const Static = Tag as ElementType
    return <Static className={className}>{text}</Static>
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  }

  const MotionTag = motion[Tag as 'span'] ?? motion.span

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      {...(onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once: true, amount: 0.4 } })}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={`inline-block ${highlightWord?.(word, index) ? highlightClassName : wordClassName}`}
          variants={wordVariants}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  )
}
