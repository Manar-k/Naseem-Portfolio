// import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { CountUp } from '../components/CountUp'
import { Reveal } from '../components/Reveal'
// import { SectionTitle } from '../components/SectionTitle'
import { TiltShineCard } from '../components/TiltShineCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { Fragment } from 'react'

export function Stats() {
  // const { t } = useTranslation()
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="numbers" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="p-0">
        {/* <SectionTitle title={t('nav.numbers')} className="mb-14 sm:mb-20" /> */}

        <div className="mb-14 sm:mb-6">
          <Reveal> 
          <h2 className="m-0 font-display text-[clamp(26px,3.6vw,54px)] font-black leading-[1.5] text-ink">
            {content.stats.title}
          </h2>
          </Reveal> 
        </div>
        <Reveal> 
          <div className="m-0 text-[clamp(15px,1.25vw,18px)] leading-[2.1] text-ink/90 mb-12">
            <p >
              {content.stats.intro[0]} <br /> 
              {content.stats.intro[1]} <br /> 
            </p>
          <p className="font-bold text-ink/90">
            {content.stats.intro[2]}
          </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {content.stats.items.map((item, index) => (
            <Reveal key={item.label} delay={(index % 4) * 0.06}>
              <TiltShineCard className="h-full -xl border border-ink/15 bg-transparent p-7">
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

        <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9] mt-10">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.stats.statstext[0]}</p>
                </div>
            </div>
          </Reveal>

          <Reveal>
        <div
          dir="rtl"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          {content.stats.statstext.slice(1).map((word, index, arr) => (
            <Fragment key={word}>
              <span
                className={`font-display font-black text-[clamp(2rem,8vw,4.5rem) text-medium] ${
                  index === arr.length - 1 ? "text-ink" : "text-ink"
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

<Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9] mt-10">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.stats.statstext2[0]}</p>
                </div>
            </div>
          </Reveal>


        <Reveal>
        <div
          dir="rtl"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          {content.stats.statstext2.slice(1).map((word, index, arr) => (
            <Fragment key={word}>
              <span
                className={`font-display font-black text-[clamp(2rem,8vw,4.5rem) text-medium] ${
                  index === arr.length - 1 ? "text-ink" : "text-ink"
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

    <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.stats.closing[0]} <br />
                  {content.stats.closing[1]} <br />
                  {content.stats.closing[2]} <br />
                  {content.stats.closing[3]} <br />
                  {content.stats.closing[4]} <br />
                  </p>
                </div>
            </div>
    </Reveal>
          
        
          
       

        

    <Reveal>
      <div className={`flex items-center justify-center gap-4 sm:gap-6 mt-16`}>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
          <h2 className=" shrink-0 text-[15px] font-black leading-[1.3] text-accent sm:text-lg">
            {content.stats.pullQuote[0]} <br />
            {content.stats.pullQuote[1]}
          </h2>
        <span className="h-px w-8 shrink-0 bg-accent/30 sm:w-12" aria-hidden />
      </div>
    </Reveal>

        {/* <div className="mx-auto mt-16 max-w-[70ch] text-center sm:mt-20">
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
        </div> */}
      </Container>
    </section>
  )
}