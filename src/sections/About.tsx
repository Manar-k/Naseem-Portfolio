import { IconArrowDownRight } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function About() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  const [firstBody, checklistSource] = content.about.body
  const checklistItems = checklistSource.split('. ').filter(Boolean)

  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-[72px]"
    >
      <div className="lg:sticky lg:top-12 lg:self-start">
        <Eyebrow index={1} label={t('nav.about')} />
        <h2 className="m-0 font-display text-[clamp(30px,3.6vw,54px)] font-black leading-[1.5] text-ink">
          {content.about.pullQuote}
        </h2>
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

        <Reveal>
          <p className="m-0 text-ink/70">{t('common.inShort')}</p>
        </Reveal>
      </div>
    </section>
  )
}
