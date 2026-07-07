// import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
// import { SectionTitle } from '../components/SectionTitle'
import { TiltShineCard } from '../components/TiltShineCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'
import { Fragment } from 'react'

export function Business() {
  const { lang } = useLang()
  // const { t } = useTranslation()
  const content = profile[lang]
  // const lastContrast = content.business.contrasts[content.business.contrasts.length - 1]

  // const quoteCards = [
  //   `${content.business.chain[0]} ${content.business.chain.slice(1).join(' ')}.`,
  //   content.business.closing[0],
  //   content.business.pullQuote,
  // ]

  return (
    <section id="commercial" className="bg-muted px-6 py-24 text-surface sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="max-w-[1200px] p-0">
        {/* <SectionTitle title={t('nav.commercial')} className="mb-14 [&_h2]:text-white [&_span]:bg-white/25 sm:mb-20" /> */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Reveal>
            <h2 className="m-0 mb-6 font-display text-[clamp(26px,3.2vw,46px)] font-black leading-[1.5] text-accent">
              {content.business.title}
            </h2>
            </Reveal>
            
            <Reveal>
            <p className="m-0 text-[clamp(11px,1.25vw,14px)] leading-[2.1]">
  {content.business.intro.map((paragraph, index) => (
    <span
      key={index}
      className={
        index === content.business.intro.length - 1
          ? "font-bold text-accent/90"
          : "font-bold text-surface/90"
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
                  <span className="font-display mt-2 text-[clamp(8px,1.8vw,15px)] font-bold text-surface">{question}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
{/* ends of professional section */}
          <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.business.mytext[0]}</p>
                  <p>{content.business.mytext[1]}</p>
                  <p>{content.business.mytext2[0]}</p>
                </div>
            </div>
          </Reveal>

  <Reveal>        
          <div
  dir="rtl"
  className="flex flex-wrap items-center justify-center gap-5 font-display text-[clamp(2rem,5vw,4.5rem)] font-black"
>
  {content.business.mywords.map((word, index) => (
    <Fragment key={word}>
      <span className={index === content.business.mywords.length - 1 ? "text-accent" : "text-surface"}>
        {word} <p className="text-[12px] font-medium leading-[1.9]">{content.business.mytext2[index+1] || ''}</p>
      </span>

      {index < content.business.mywords.length - 1 && (
        <span className="text-accent text-4xl">←</span>
      )}
    </Fragment>
  ))}
</div>
</Reveal>

          <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-6">
                  <p>{content.business.mytext2[4]}</p>
                </div>
            </div>
          </Reveal>

        {/* <Reveal>
          <p className="m-0 mb-6 max-w-[60ch] text-[clamp(16px,1.4vw,20px)] font-medium leading-[2]">
            {content.business.intro}
          </p>
        </Reveal> */}
        {/* <Reveal>
          <h2 className="m-0 mb-10 font-display text-[clamp(34px,5.5vw,84px)] font-black leading-[1.4]">
            {lastContrast.less}
            <br />
            {lastContrast.more.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="inline-block rounded-[0.15em] bg-bg px-[0.25em] text-ink">
              {lastContrast.more.split(' ').slice(-1)}
            </span>
          </h2>
        </Reveal> */}

        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quoteCards.map((text, index) => (
            <Reveal key={text} delay={index * 0.12}>
              <TiltShineCard className="h-full rounded-xl border border-white/30 bg-accent p-7 text-[16px] font-medium leading-[1.9]">
                {text}
              </TiltShineCard>
            </Reveal>
          ))}
        </div> */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-4">
          {content.business.contrasts.map((pair) => (
            <Reveal key={pair.more} delay={0.12}>
              <TiltShineCard className="h-full -xl border border-surface/30 bg-muted p-7 font-bold text-[12px] text-center font-medium leading-[1.9]">
                {pair.less}
                <br />
                <strong className="font-extrabold">{pair.more}</strong>
              </TiltShineCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.business.mytext3[0]}</p>
                </div>
            </div>
          </Reveal>
<Reveal>
<div
  dir="rtl"
  className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
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
        <span className="text-accent text-2xl sm:text-4xl">━</span>
      )}
    </Fragment>
  ))}
</div>
</Reveal>

          {/* <Reveal>
            <div className="flex flex-col gap-3.5 font-display text-[clamp(12px,1.5vw,15px)] font-bold leading-[1.9]">
              {content.business.mytext3.slice(1).map((item) => (
                <div key={item} className="flex items-baseline gap-3.5">
                  <IconArrowDownRight
                    className="h-4 w-4 shrink-0 -translate-y-0.5 text-accent rtl:-scale-x-100"
                    stroke={2.25}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal> */}


          <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.business.closing[0]}</p>
                  <p>{content.business.closing[1]}</p>
                  <p>{content.business.closing[2]}</p>
                  <p>{content.business.closing[3]}</p>
                </div>
            </div>
          </Reveal>


    <Reveal>
      <div className={`flex items-center justify-center gap-4 sm:gap-6`}>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
          <h2 className="m-0 shrink-0 text-[15px] font-black leading-[1.3] text-accent sm:text-lg">
            {content.business.pullQuote[0]} <br />
            {content.business.pullQuote[1]}
          </h2>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
      </div>
    </Reveal>

        {/* <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <div className="flex flex-col text-[16.5px] font-medium leading-[1.9]">
                {content.business.askList.map((item, index) => (
                  <div
                    key={item}
                    className={`flex gap-3 py-3 ${
                      index < content.business.askList.length - 1 ? 'border-b border-white/40' : ''
                    }`}
                  >
                    <span className="font-extrabold">{sectionNumber(index + 1, lang)}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="m-0 mt-6 text-[16px] font-medium leading-[2]">{content.business.closing[1]}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
              {content.business.contrasts.slice(0, -1).map((pair) => (
                <div key={pair.more} className="border-e-[3px] border-white pe-4.5">
                  {pair.less}
                  <br />
                  <strong className="font-extrabold">{pair.more}</strong>
                </div>
              ))}
            </div>
          </Reveal> */}
        {/* </div> */}
      </Container>
    </section>
  )
}