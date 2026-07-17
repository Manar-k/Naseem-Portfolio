import { motion, type Variants } from 'motion/react'
import { Fragment, type ElementType } from 'react'
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

// const wordVariants: Variants = {
//   hidden: { opacity: 0, y: '0.6em', rotate: 1.5, filter: 'blur(6px)' },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     filter: 'blur(0px)',
//     transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
//   },
// }
const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.6em', rotate: 1.5 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}

/**
 * Splits text into words and reveals them with a staggered blur/rotate/
 * translate entrance, matching the source design's headline treatment.
 * A literal "\n" in the text forces a hard line break instead of relying
 * on the browser to reflow words at each viewport width.
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
  const lines = text.split('\n')

  if (reducedMotion) {
    const Static = Tag as ElementType
    return (
      <Static className={className}>
        {lines.map((line, lineIndex) => (
          <Fragment key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </Static>
    )
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  }

  const MotionTag = motion[Tag as 'span'] ?? motion.span

  let wordIndex = 0

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      {...(onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once: true, amount: 0.4 } })}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(' ')
        return (
          <Fragment key={lineIndex}>
            {words.map((word, i) => {
              const index = wordIndex++
              return (
                <Fragment key={`${word}-${index}`}>
                  <motion.span
                    className={`inline-block ${highlightWord?.(word, index) ? highlightClassName : wordClassName}`}
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                  {i < words.length - 1 ? ' ' : ''}
                </Fragment>
              )
            })}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </Fragment>
        )
      })}
    </MotionTag>
  )
}
