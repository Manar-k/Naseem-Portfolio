import { IconArrowDownRight } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function About() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  const [firstBody, checklistSource] = content.about.body
  const checklistItems = checklistSource.split('. ').filter(Boolean)

  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <SectionTitle title={t('nav.about')} className="mb-14 sm:mb-20" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <p className="m-0 font-display text-[clamp(26px,3.2vw,46px)] font-black leading-[1.5] text-ink">
            {content.about.pullQuote}
          </p>
        </div>

        <div className="flex flex-col gap-9 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1]">
          {content.about.intro.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              <p className="m-0 text-ink/90">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal>
            <div className="border-e-2 border-accent pe-6">
              <div className="mb-2 font-display text-xl font-extrabold text-accent">
                {content.about.dual.insideTitle}
              </div>
              <p className="m-0">{content.about.dual.insideText}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-e-2 border-accent pe-6">
              <div className="mb-2 font-display text-xl font-extrabold text-accent">
                {content.about.dual.outsideTitle}
              </div>
              <p className="m-0">{content.about.dual.outsideText}</p>
            </div>
          </Reveal>

          <Reveal>
            <p className="m-0">{firstBody}</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-3.5 font-display text-[clamp(17px,1.5vw,22px)] font-bold leading-[1.9]">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-baseline gap-3.5">
                  <IconArrowDownRight
                    className="h-4 w-4 shrink-0 -translate-y-0.5 text-accent rtl:-scale-x-100"
                    stroke={2.25}
                  />
                  <span>{item}.</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="mx-auto mt-16 max-w-[26ch] text-center font-display text-2xl font-black text-accent sm:mt-20 sm:text-3xl">
          {t('common.inShort')}
        </p>
      </Reveal>
    </section>
  )
}