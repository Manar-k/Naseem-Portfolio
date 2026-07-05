import { motion } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Ambient animated backdrop for the hero: slow-drifting blurred accent
 * orbs plus a faint dot grid, in the spirit of a React Bits "Aurora"
 * background but hand-rolled to match this palette exactly.
 */
export function HeroBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #EDE6D6 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <motion.div
        className="absolute -top-40 start-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[120px]"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.15, 0.95, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[110px]"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, -50, 30, 0], y: [0, -30, 40, 0], scale: [1, 0.9, 1.1, 1] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] start-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/15 blur-[100px]"
        animate={reducedMotion ? undefined : { x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  )
}