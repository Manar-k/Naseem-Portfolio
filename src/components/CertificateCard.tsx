import { motion, useTransform, type MotionValue } from 'motion/react'

interface CertificateCardProps {
  src: string
  index: number
  total: number
  progress: MotionValue<number>
}

/**
 * One card in the stacked deck. Each card owns a slice of the overall
 * scroll progress: it sits still (stacked, slightly fanned) until its
 * turn, then slides off-frame as the next card underneath comes forward.
 */
export function CertificateCard({ src, index, total, progress }: CertificateCardProps) {
  const start = index / total
  const reveal = (index + 0.4) / total
  const end = (index + 1) / total

  const y = useTransform(progress, [Math.max(start - 1 / total, 0), start, reveal], [24, 24, 0])
  const scale = useTransform(progress, [Math.max(start - 1 / total, 0), start, reveal], [0.94, 0.94, 1])
  const exitX = useTransform(progress, [reveal, end], [0, index % 2 === 0 ? -60 : 60])
  const exitRotate = useTransform(progress, [reveal, end], [0, index % 2 === 0 ? -8 : 8])
  const exitOpacity = useTransform(progress, [reveal, end], [1, 0])
  const fanRotate = ((index % 3) - 1) * 2.5

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ y, scale, x: exitX, rotate: exitRotate, opacity: index === total - 1 ? 1 : exitOpacity, zIndex: total - index }}
    >
      <div
        className="w-full max-w-[420px] overflow-hidden rounded-xl border border-ink/15 bg-bg shadow-2xl"
        style={{ transform: `rotate(${fanRotate}deg)` }}
      >
        <img src={src} alt="" loading="lazy" className="block aspect-[4/3] w-full object-cover" />
      </div>
    </motion.div>
  )
}