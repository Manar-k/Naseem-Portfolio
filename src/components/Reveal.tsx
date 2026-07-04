import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, className, delay = 0, y = 20, as = 'div' }: RevealProps) {
  const reducedMotion = useReducedMotion()

  const variants: Variants = reducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: EASE_OUT_EXPO },
        },
      }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
