import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface RoleCyclerProps {
  roles: string[]
  className?: string
  displayDuration?: number
  hiddenDuration?: number
}

export function RoleCycler({
  roles,
  className,
  displayDuration = 2500,
  hiddenDuration = 400,
}: RoleCyclerProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return // skip cycling entirely for reduced-motion users
    const hideTimer = setTimeout(() => setVisible(false), displayDuration)
    return () => clearTimeout(hideTimer)
  }, [index, reducedMotion, displayDuration])

  useEffect(() => {
    if (reducedMotion || visible) return
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length)
      setVisible(true)
    }, hiddenDuration)
    return () => clearTimeout(nextTimer)
  }, [visible, reducedMotion, roles.length, hiddenDuration])

  if (reducedMotion) {
    // Static fallback: just join them like the original did
    return <p className={className}>{roles.join(' . ')}</p>
  }

  return (
    <p className={className}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="inline-block"
          >
            {roles[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </p>
  )
}