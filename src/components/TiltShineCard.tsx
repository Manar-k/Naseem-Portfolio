import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface TiltShineCardProps {
  children: ReactNode
  className?: string
}

/**
 * A card that tilts in 3D toward the cursor and shows a soft light sweep
 * following the pointer, reverting smoothly on mouse leave. Disabled under
 * reduced motion (renders as a plain static card).
 */
export function TiltShineCard({ children, className = '' }: TiltShineCardProps) {
  const reducedMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08), transparent 55%)`

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 14)
    rotateX.set((0.5 - py) * 14)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glareX.set(50)
    glareY.set(50)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glareBackground }} aria-hidden />
      {children}
    </motion.div>
  )
}