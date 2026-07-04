import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'

export function Professional() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="professional" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="p-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Eyebrow index={2} label={t('nav.professional')} />
            <h2 className="m-0 mb-6 font-display text-[clamp(30px,3.6vw,54px)] font-black leading-[1.5] text-ink">
              {content.professional.title}
            </h2>
            <p className="m-0 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1] text-ink/90">
              {content.professional.intro}
            </p>
          </div>

          <div className="flex flex-col">
            {content.professional.questions.map((question, index) => (
              <Reveal key={question} delay={index * 0.04}>
                <div className="flex items-baseline gap-5 border-b border-ink/15 py-6 first:pt-0">
                  <span className="font-display text-sm font-extrabold text-accent">
                    {sectionNumber(index + 1, lang)}
                  </span>
                  <span className="font-display text-[clamp(19px,1.8vw,26px)] font-bold text-ink">{question}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div className="flex flex-col gap-7 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1]">
            {content.professional.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.04}>
                <p className="m-0">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className="m-0 text-ink/70">
                {t('common.inShort')} {content.professional.closing}
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="border border-ink/20 p-6 sm:p-9">
              <div className="mb-5 font-display text-xl font-extrabold text-accent">
                {t('common.whatSetsHimApart')}
              </div>
              <div className="flex flex-col text-[15.5px] leading-[1.9]">
                {content.professional.traits.map((trait, index) => (
                  <div
                    key={trait}
                    className={`flex gap-3 py-3 ${
                      index < content.professional.traits.length - 1 ? 'border-b border-ink/10' : ''
                    }`}
                  >
                    <span className="text-accent">›</span>
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
