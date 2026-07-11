import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'

export function Professional() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="professional" className="px-6 py-12 sm:px-10 sm:py-10 lg:px-[72px]">
      <Container className="p-0">
        <SectionTitle title={t('nav.professional')} className="mb-14 sm:mb-20" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Reveal>
            <h2 className="m-0 mb-6 font-display text-[clamp(26px,3.2vw,46px)] font-black leading-[1.5] text-ink">
              {content.professional.title}
            </h2>
            </Reveal>
            {/* <p className="m-0 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1] text-ink/90">
              {content.professional.intro}
            </p> */}
            <Reveal>
              
            <p className="m-0 text-[clamp(11px,1.25vw,14px)] leading-[2.1] font-light mb-12 text-ink/85">
  {content.professional.intro.map((paragraph, index) => (
    <span
      key={index}
      className={
        index === content.professional.intro.length - 1
          ? "font-bold text-ink/90"
          : "font-light text-ink/90"
      }
    >
      {paragraph}
      {index < content.professional.intro.length - 1 && " "}
    </span>
  ))}
</p>
</Reveal>
            {/* {content.professional.intro.map((paragraph, index) => (
            <p className={`m-0 text-[clamp(15px,1.25vw,18px)]  leading-[2.1] ${
        index === content.professional.intro.length - 1
          ? 'text-ink/90 font-bold'
          : 'text-ink/90 font-light'
      }`}>{paragraph}</p>))} */}
          </div>

          <div className="flex flex-col">
            {content.professional.questions.map((question, index) => (
              <Reveal key={question} delay={index * 0.04}>
                <div className="flex items-baseline gap-5 border-b border-ink/15 py-6 first:pt-0">
                  <span className="font-display text-sm font-extrabold text-accent">
                    {sectionNumber(index + 1, lang)}
                  </span>
                  <span className="font-display mt-2 text-[clamp(10px,1.8vw,15px)] font-bold text-ink">{question}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div className="flex flex-col gap-7 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1]">

            {content.professional.body.map((paragraph, index) => {
  const isLast = index === content.professional.body.length - 1;
  const isbeforeLast = index === content.professional.body.length - 2;

  const words = paragraph.split(' ');
  const firstThreeWords = words.slice(0, 3).join(' ');
  const rest2 = words.slice(3).join(' ');

  const lastThreeWords = words.slice(0, 11).join(' ');
  const lastrest = words.slice(11).join(' ');

  return (
    <Reveal key={index} delay={index * 0.04}>
      <div className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
        <p className="m-0">
          {isLast ? (
            <>
              <span className="m-0 text-ink font-bold">{lastThreeWords}</span> {lastrest}
            </>
          ) : isbeforeLast ? (
            <>
              <span className="m-0 text-ink font-bold">{firstThreeWords}</span> {rest2}
            </>
          ) : (
            paragraph
          )}
        </p>
      </div>
    </Reveal>
  );
})}
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

    <Reveal>
      <div className={`flex items-center justify-center gap-4 sm:gap-6 mt-16`}>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
          <h2 className="m-0 shrink-0 text-[15px] font-black leading-[1.3] text-accent sm:text-lg">
            {content.professional.closing[0]} <br />
            {content.professional.closing[1]}
          </h2>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
      </div>
    </Reveal>
      </Container>
    </section>
  )
}