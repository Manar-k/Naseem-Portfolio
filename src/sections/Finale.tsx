import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { WordReveal } from '../components/WordReveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

const PAIR_MARKER = /بين|Between/

/** Splits "He's a character that combines discipline and momentum. Mind and tongue. ..."
 * into a lead-in clause and a list of "X and Y" pairs for the 4-cell grid. */
function splitLeadAndPairs(bodyFirstSentence: string, restSentences: string[]): { lead: string; pairs: string[] } {
  const match = bodyFirstSentence.match(PAIR_MARKER)
  const lead = match ? bodyFirstSentence.slice(0, match.index).trim() : ''
  const firstPair = match ? bodyFirstSentence.slice(match.index) : bodyFirstSentence
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
  const lastWord = content.finale.signature.trim().split(' ').slice(-1)[0]

  return (
    <section id="summary" className="border-y border-ink/10 bg-surface px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="max-w-[1100px] p-0">
        <Eyebrow index={7} label={t('nav.summary')} />
        <h2 className="m-0 mb-8 font-display text-[clamp(30px,3.6vw,54px)] font-black leading-[1.5] text-ink">
          {name} {content.finale.negations.slice(0, -1).join(' ')}{' '}
          <span className="text-accent">{content.finale.negations[content.finale.negations.length - 1]}</span>
        </h2>

        {lead ? <p className="m-0 mb-12 font-display text-[clamp(18px,1.8vw,26px)] font-extrabold text-ink">{lead}:</p> : null}

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pairs.map((pair) => (
            <Reveal key={pair}>
              <div className="border border-ink/20 p-6 text-center font-display text-[clamp(17px,1.6vw,22px)] font-extrabold leading-[1.8] text-ink">
                {pair}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 text-[clamp(15px,1.25vw,17.5px)] font-light leading-[2.1] sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <p className="m-0">{content.finale.body[1]}</p>
          </Reveal>
          <Reveal>
            <p className="m-0">
              <strong className="font-bold text-accent">{t('common.inShort')}</strong>{' '}
              {content.finale.principles.join(' ')}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 text-center font-display text-[clamp(16px,1.5vw,20px)] font-extrabold tracking-[0.3em] text-accent sm:mt-20">
            {name.split(' ')[0]}
          </div>
        </Reveal>

        <WordReveal
          as="p"
          text={content.finale.signature}
          className="mx-auto mt-4 block max-w-[28ch] text-center font-display text-[clamp(24px,3.4vw,48px)] font-black leading-[1.8] text-ink"
          wordClassName="text-ink"
          highlightWord={(word) => word.replace(/\.$/, '') === lastWord.replace(/\.$/, '')}
          stagger={0.05}
        />
      </Container>
    </section>
  )
}
