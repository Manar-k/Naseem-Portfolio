import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { TiltShineCard } from '../components/TiltShineCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'
import { Fragment } from 'react'

export function Business() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="commercial" className="bg-muted px-6 py-12 text-surface sm:px-10 sm:py-10 lg:px-[72px]">
      <Container className="max-w-[1200px] p-0">
        <SectionTitle title={t('nav.commercial')} className="mb-14 [&_h2]:text-accent [&_span]:bg-accent/25 sm:mb-20" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Reveal>
            <h2 className="m-0 mb-6 font-display text-[clamp(26px,3.2vw,46px)] font-black leading-[1.5] text-accent">
              {content.business.title}
            </h2>
            </Reveal>
            
            <Reveal>
              
            <p className="m-0 text-[clamp(11px,1.25vw,14px)] leading-[2.1] ">
  {content.business.intro.map((paragraph, index) => (
    <span
      key={index}
      className={
        index === content.business.intro.length - 1
          ? "font-bold text-accent/85"
          : "font-bold text-surface/70"
      }
    >
      {paragraph}
      {index < content.business.intro.length - 1 && " "}
    </span>
  ))}
</p>
</Reveal>
          </div>

          <div className="flex flex-col">
            {content.business.askList.map((question, index) => (
              <Reveal key={question} delay={index * 0.04}>
                <div className="flex items-baseline gap-5 border-b border-accent/15 py-6 first:pt-0">
                  <span className="font-display text-sm font-extrabold text-accent">
                    {sectionNumber(index + 1, lang)}
                  </span>
                  <span className="font-display mt-2 text-[clamp(10px,1.8vw,15px)] font-bold text-surface/85">{question}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

          <Reveal>
            <div className="flex flex-col gap-3 text-[clamp(15px,1.25vw,18px)] font-medium text-surface/70 leading-[1.9] mt-12">
                <div  className=" border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
                  <p>{content.business.mytext[0]}</p>
                  <p>{content.business.mytext[1]}</p>
                  <p>{content.business.mytext2[0]}</p>
                </div>
            </div>
          </Reveal>

  <Reveal>        
          <div
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  className="flex flex-col items-center justify-center gap-3 text-center font-display text-[clamp(1.1rem,5vw,3rem)] font-black sm:flex-row sm:flex-nowrap sm:items-start sm:gap-5 sm:overflow-x-auto mb-5"
>
  {content.business.mywords.map((word, index) => (
    <Fragment key={word}>
      <span className={`flex flex-col items-center sm:w-auto sm:shrink-0 ${index === content.business.mywords.length - 1 ? "text-accent sm:mb-5" : "text-surface"}`}>
        {word}
        {index !== content.business.mywords.length - 1 && (
  <p className="mt-1 max-w-[70px] text-[9px] font-medium leading-[1.4] text-center sm:max-w-none sm:text-[12px] sm:leading-[1.9]">{content.business.mytext2[index + 1] || ''}</p>
)}
      </span>

      {index < content.business.mywords.length - 1 && (
        <>
          <span className="shrink-0 text-accent text-xl sm:hidden">↓</span>
          <span className="hidden shrink-0 text-accent sm:inline sm:text-4xl">{lang === 'ar' ? '←' : '→'}</span>
        </>
      )}
    </Fragment>
  ))}
</div>
</Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 text-[clamp(15px,1.25vw,18px)] font-medium text-surface/70 leading-[1.9]">
                <div  className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
                  <p>{content.business.mytext2[4]}</p>
                </div>
            </div>
          </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-4">
          {content.business.contrasts.map((pair) => (
            <Reveal key={pair.more} delay={0.12}>
              <TiltShineCard className="h-full -xl border border-surface/30 bg-muted p-7 font-bold text-[17px_1.25vw_22px] text-center leading-[1.9] font-display">
                {pair.less}
                <br />
                <strong className="font-extrabold">{pair.more}</strong>
              </TiltShineCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
            <div className="flex flex-col gap-4 text-[clamp(15px,1.25vw,18px)] font-medium text-surface/70 leading-[1.9]">
                <div  className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
                  <p>{content.business.mytext3[0]}</p>
                </div>
            </div>
          </Reveal>
<Reveal>
<div
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
  className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-5  my-5"
>
  {content.business.mytext3.slice(1).map((word, index, arr) => (
    <Fragment key={word}>
      <span
        className={`font-display font-black text-[clamp(2rem,8vw,4.5rem) text-medium] ${
          index === arr.length - 1 ? "text-surface" : "text-surface"
        }`}
      >
        {word}
      </span>

      {index < arr.length - 1 && (
                        <span className="text-accent text-2xl sm:hidden">|</span>
                      )}
              {index < arr.length - 1 && (
                <span className="hidden text-accent sm:inline sm:text-4xl">━</span>
              )}
    </Fragment>
  ))}
</div>
</Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 text-[clamp(15px,1.25vw,18px)] font-medium text-surface/70 leading-[1.9] sm: mb-8">
                <div  className="border-accent rtl:border-r-2 rtl:pr-6 ltr:border-l-2 ltr:pl-6">
                  <p>{content.business.closing[0]}</p>
                  <p>{content.business.closing[1]}</p>
                  <p>{content.business.closing[2]}</p>
                  <p>{content.business.closing[3]}</p>
                </div>
            </div>
          </Reveal>


    <Reveal>
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
          <h2 className="m-0 text-[15px] font-black leading-[1.3] text-accent sm:text-lg">
            {content.business.pullQuote[0]} <br />
            {content.business.pullQuote[1]}
          </h2>
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
      </div>
    </Reveal>
      </Container>
    </section>
  )
}