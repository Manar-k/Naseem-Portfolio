import { useReducedMotion } from '../hooks/useReducedMotion'
import { SectionTitle } from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'

const CERT_COUNT = 12
const certificates = Array.from(
  { length: CERT_COUNT },
  (_, i) => `${import.meta.env.BASE_URL}images/certificates/cert-${String(i + 1).padStart(2, '0')}.jpg`,
)

// Same technique as codyhouse.co/demo-tutorials/stacking-cards: every card
// sticks at the SAME top offset (so they land in the exact same screen
// spot and pile up), while a per-index translateY reveals a thin sliver of
// each earlier card before the next one covers it.
const STICK_TOP = 96
const STACK_GAP = 18

export function Certificates() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <section className="border-y border-ink/10 bg-bg px-6 py-24 sm:px-10 lg:px-[72px]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {certificates.map((src) => (
            <div key={src} className="overflow-hidden  border border-ink/15">
              <img src={src} alt="" loading="lazy" className="block aspect-[3/2] w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="relative border-y border-ink/10 bg-bg px-6 py-12 sm:px-10 sm:py-10 lg:px-[72px]">
      <SectionTitle title={t('nav.Certificates')} className="mb-14 sm:mb-20" id="Certificates" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
        <h2 className="mr-12 mb-6 font-display text-[clamp(24px,3vw,44px)] font-black leading-[1.5] text-ink">
          {t('nav.Certificates')}
        </h2>
        </Reveal>
    
        <div style={{ paddingBottom: `${STACK_GAP * (CERT_COUNT - 1)}px` }}>
          {certificates.map((src, index) => (
            <div
              key={src}
              className="sticky mx-auto w-full max-w-[680px] overflow-hidden  border border-ink/15 bg-bg shadow-2xl"
              style={{
                top: `${STICK_TOP}px`,
                aspectRatio: '3 / 2',
                transform: `translateY(${STACK_GAP * index}px)`,
                transformOrigin: 'center top',
                zIndex: index + 1,
              }}
            >
              <img src={src} alt="" loading="lazy" className="block h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
