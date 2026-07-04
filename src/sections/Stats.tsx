import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { CountUp } from '../components/CountUp'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Stats() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="numbers" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="p-0">
        <div className="mb-14 text-center sm:mb-20">
          <div className="flex justify-center">
            <Eyebrow index={4} label={t('nav.numbers')} />
          </div>
          <h2 className="m-0 font-display text-[clamp(30px,4vw,60px)] font-black leading-[1.5] text-ink">
            {content.stats.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-[clamp(15px,1.3vw,18px)] font-light leading-[2] text-ink/85">
            {content.stats.intro}
          </p>
        </div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3 lg:grid-cols-4">
          {content.stats.items.map((item, index) => (
            <Reveal key={item.label} delay={(index % 4) * 0.05}>
              <div className="h-full bg-bg p-7">
                <CountUp value={item.value} className="font-display text-[clamp(40px,4.5vw,64px)] font-black text-accent" dir="ltr" />
                <div className="mt-2 text-[15px] leading-[1.8] text-ink/85">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-4 text-[clamp(15px,1.25vw,17.5px)] font-light leading-[2.1]">
              {content.stats.closing.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="border border-ink/20 p-6 text-[clamp(15px,1.25vw,17.5px)] font-light leading-[2.1] sm:p-9">
              <p className="m-0 font-display text-[clamp(22px,2.2vw,32px)] font-black leading-[1.8] text-accent">
                {content.stats.pullQuote}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
