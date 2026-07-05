import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { CertificateCard } from '../components/CertificateCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { useReducedMotion } from '../hooks/useReducedMotion'

const CERT_COUNT = 12
const certificates = Array.from(
  { length: CERT_COUNT },
  (_, i) => `/images/certificates/cert-${String(i + 1).padStart(2, '0')}.jpg`,
)

export function Certificates() {
  const { lang } = useLang()
  const content = profile[lang]
  const reducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  const dir = lang === 'ar' ? -1 : 1

  // "Naseem" travels from its start-side top corner to the opposite bottom
  // corner as the deck scrolls by, shrinking from a big flourish down to a
  // small resting label once the last certificate has surfaced.
  const nameX = useTransform(scrollYProgress, [0, 1], [0, dir * -62])
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 62])
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  if (reducedMotion) {
    return (
      <section className="border-y border-ink/10 bg-bg px-6 py-24 sm:px-10 lg:px-[72px]">
        <p className="mb-10 text-center font-display text-2xl font-black text-accent">{content.meta.name.split(' ')[0]}</p>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {certificates.map((src) => (
            <div key={src} className="overflow-hidden rounded-xl border border-ink/15">
              <img src={src} alt="" loading="lazy" className="block aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative border-y border-ink/10 bg-bg" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden px-6 sm:px-10 lg:px-[72px]">
        <motion.div
          className="pointer-events-none absolute top-[6%] z-20 select-none font-display font-black text-accent [inset-inline-end:6%]"
          style={{
            translateX: nameX,
            translateY: nameY,
            scale: nameScale,
            fontSize: 'clamp(48px, 9vw, 140px)',
          }}
        >
          {content.meta.name.split(' ')[0]}
        </motion.div>

        <div className="relative mx-auto h-full max-w-[1100px]">
          {certificates.map((src, index) => (
            <CertificateCard key={src} src={src} index={index} total={CERT_COUNT} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}