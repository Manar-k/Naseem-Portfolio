import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { CountUp } from '../components/CountUp'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { TiltShineCard } from '../components/TiltShineCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Stats() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="numbers" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="p-0">
        <SectionTitle title={t('nav.numbers')} className="mb-14 sm:mb-20" />

        <div className="mb-14 text-center sm:mb-20">
          <h2 className="m-0 font-display text-[clamp(26px,3.6vw,54px)] font-black leading-[1.5] text-ink">
            {content.stats.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-[clamp(15px,1.3vw,18px)] font-light leading-[2] text-ink/85">
            {content.stats.intro}
          </p>
        </div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {content.stats.items.map((item, index) => (
            <Reveal key={item.label} delay={(index % 4) * 0.06}>
              <TiltShineCard className="h-full rounded-xl border border-ink/15 bg-surface p-7">
                <CountUp
                  value={item.value}
                  className="font-display text-[clamp(36px,4.5vw,60px)] font-black text-accent"
                  dir="ltr"
                />
                <div className="mt-2 text-[15px] leading-[1.8] text-ink/85">{item.label}</div>
              </TiltShineCard>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[70ch] text-center sm:mt-20">
          <Reveal>
            <p className="m-0 font-display text-[clamp(22px,2.2vw,32px)] font-black leading-[1.8] text-accent">
              {content.stats.pullQuote}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-6 flex flex-col gap-3 text-[clamp(15px,1.25vw,17.5px)] font-light leading-[2.1]">
              {content.stats.closing.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}