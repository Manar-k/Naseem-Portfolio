import { useTranslation } from 'react-i18next'
import { CardGrid } from '../components/CardGrid'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
// import { HorizontalScrollCards } from '../components/HorizontalScrollCards'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
// import { sectionNumber } from '../utils/numerals'

function boldPrefixByCommaCount(text: string, commaCount: number): [string, string] {
  const commaRegex = /[,،]\s*/g
  let match: RegExpExecArray | null
  let count = 0
  let cutIndex = -1
  while ((match = commaRegex.exec(text))) {
    count++
    if (count === commaCount) {
      cutIndex = match.index + match[0].length
      break
    }
  }
  if (cutIndex === -1) return [text, '']
  return [text.slice(0, cutIndex).trimEnd(), text.slice(cutIndex).trimStart()]
}

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
            {/* <Reveal>
              
            <p className="m-0 text-[clamp(11px,1.25vw,14px)] leading-[2.1] font-light text-ink/85">
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
</Reveal> */}

          </div>

          {/* <div className="flex flex-col">
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
          </div> */}
        </div>
        
        <CardGrid
  className="mt-10 sm:mt-14 mb-10"
  items={content.professional.body.slice(0, 4).map((body, index, arr) => {
    const isLast = index === arr.length - 1
    const isBeforeLast = index === arr.length - 2
    const commaCount = isLast ? 2 : isBeforeLast ? 1 : 0
    const [boldPrefix, rest] = commaCount > 0 ? boldPrefixByCommaCount(body, commaCount) : ['', body]
    return {
      image: `${import.meta.env.BASE_URL}images/Naseem${index + 1}.jpeg`,
      alt: content.meta.name,
      description: rest,
      boldPrefix: boldPrefix || undefined,
    }
  })}
/>

          {/* <Reveal>
            <div className="mx-auto w-full max-w-[520px] border border-ink/20 p-6 sm:p-9">
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
          </Reveal> */}
        {/* </div> */}

    <Reveal>
      <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6 mt-16">
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
          <h2 className="m-0 text-[clamp(12px,1.25vw,15px)] font-display leading-[1.3] text-accent sm:text-lg">
            {content.professional.closing[0]} <br />
            {content.professional.closing[1]}
          </h2>
        <span className="hidden h-px w-8 shrink-0 bg-accent/30 sm:block sm:w-12" aria-hidden />
      </div>
    </Reveal>
      </Container>
    </section>
  )
}