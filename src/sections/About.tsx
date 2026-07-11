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
    <>
    <span id="about"></span>
    <section  className="px-6 py-12 sm:px-10 sm:py-10 lg:px-[72px]">
      <SectionTitle title={content.about.title} className="mb-14 sm:mb-20"/>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <Reveal>
          <p className="m-0 pt-12 font-display text-[clamp(16px,3.2vw,26px)] font-black leading-[1.5] text-ink">
            {content.about.pullQuote}
          </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-0 text-[clamp(12px,1.25vw,15px)] font-light leading-[2.1]">
          {content.about.intro.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              {/* <p className="m-0 text-ink/90">{paragraph}</p> */}
              <p className={`m-0 ${
        index === content.about.intro.length - 1
          ? 'text-ink/90 font-bold'
          : 'text-ink/90'
      }`}>{paragraph}</p>
            </Reveal>
          ))}

          <Reveal>
            <div className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
              <div className="mb-2 mt-6 font-display text-xl font-extrabold text-accent">
                {content.about.dual.insideTitle}
              </div>
              <p className="mb-4">{content.about.dual.insideText}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
              <div className="mb-2 font-display text-xl font-extrabold text-accent">
                {content.about.dual.outsideTitle}
              </div>
              <p className="mb-4">{content.about.dual.outsideText}</p>
            </div>
          </Reveal>

          <Reveal>
            <p className="m-0 font-bold text-accent">{firstBody}</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-3.5 font-display text-[clamp(12px,1.5vw,15px)] font-bold leading-[1.9]">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-baseline gap-3.5">
                  <IconArrowDownRight
                    className="h-4 w-4 shrink-0 -translate-y-0.5 text-accent rtl:-scale-x-100"
                    stroke={2.25}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <Reveal>
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6 mt-16">
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
          <h2 className="m-0 text-[15px] font-black leading-[1.3] text-accent sm:text-lg">
            {t('common.inShort')}
          </h2>
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
      </div>
    </Reveal>
    </section>
    </>
  )
}