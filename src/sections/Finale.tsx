import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { TiltShineCard } from '../components/TiltShineCard'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { IconArrowDownRight } from '@tabler/icons-react'

const PAIR_MARKER = /بين:|Between:/

/** Splits "He's a character that combines discipline and momentum. Mind and tongue. ..."
 * into a lead-in clause and a list of "X and Y" pairs for the 4-cell grid. */
function splitLeadAndPairs(bodyFirstSentence: string, restSentences: string[]): { lead: string; pairs: string[] } {
  const match = bodyFirstSentence.match(PAIR_MARKER)
  const splitEnd = match ? match.index! + match[0].length : 0
  const lead = match ? bodyFirstSentence.slice(0, splitEnd).trim() : ''
  const firstPair = match ? bodyFirstSentence.slice(splitEnd).trim() : bodyFirstSentence
  const pairs = [firstPair, ...restSentences].map((sentence) => sentence.replace(/\.$/, '').trim())
  return { lead, pairs }
}

export function Finale() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]
  const name = content.meta.name

  const [firstSentence, ...restSentences] = content.finale.body[0].split('. ')
  const { lead, pairs } = splitLeadAndPairs(firstSentence, restSentences)

  return (
    <section id="summary" className="border-y border-ink/10 bg-surface px-6 py-12 sm:px-10 sm:py-10 lg:px-[72px]">
      <Container className="max-w-[1100px] p-0">
        <SectionTitle title={t('nav.summary')} className="mb-14 sm:mb-20" />
        <Reveal>
        <h2 className="m-0 mb-8 font-display text-[clamp(16px,3.2vw,26px)] font-black leading-[1.5] text-ink">
          {name} {content.finale.negations[0]+" "} 
          {content.finale.negations[1]} <br />
          {content.finale.negations[2]} <br />
          {content.finale.negations[3]}
        </h2>
        </Reveal>

        {lead ? (
          <Reveal>
            <div className="flex flex-col gap-3 mb-5 text-[clamp(15px,1.25vw,18px)] font-light leading-[1.9]">
                <div  className="border-r-[3px] border-accent pr-6 py-2">
                  <p>{lead}</p>
                </div>
            </div>
          </Reveal>
        ) : null}

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pairs.map((pair, index) => (
            <Reveal key={pair} delay={index * 0.1}>
              <TiltShineCard className="-xl border border-ink/20 bg-surface p-6 text-center font-display text-[clamp(17px,1.6vw,22px)] font-extrabold leading-[1.8] text-ink">
                {pair}
              </TiltShineCard>
            </Reveal>
          ))}
        </div>

        <div className="mb-2 border-r-2 border-accent pr-6 grid grid-cols-1 gap-10  leading-[2.1] sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <p className="text-[clamp(15px,1.25vw,18px)] font-light">{content.finale.body[1]} <br />
            <span className="text-[clamp(15px,1.25vw,18px)] font-light">{content.finale.body[2]}<span className="text-[clamp(15px,1.25vw,18px)] font-medium">{content.finale.body[3]}</span></span></p>
          </Reveal>
        </div>

        <Reveal>
            <div className="flex flex-col gap-3.5 font-display text-[clamp(12px,1.5vw,15px)] font-bold leading-[1.9]">
              {content.finale.principles.map((item) => (
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
      </Container>
    </section>
  )
}