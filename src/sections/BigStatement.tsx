import { Container } from '../components/Container'
import { WordReveal } from '../components/WordReveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

/** The last word of each comma-separated clause carries the emphasis, matching the source design. */
function lastWordsOfClauses(text: string): Set<string> {
  const clauses = text.split(/[،,]\s*/)
  const lastWords = clauses.map((clause) => {
    const words = clause.trim().split(' ')
    return words[words.length - 1]
  })
  return new Set(lastWords)
}

export function BigStatement() {
  const { lang } = useLang()
  const content = profile[lang]
  const text = content.about.summary
  const highlighted = lastWordsOfClauses(text)

  return (
    <section className="border-y border-ink/10 bg-surface px-6 py-16 sm:px-10 sm:py-24 lg:px-[72px] lg:py-28">
      <Container>
        <WordReveal
          as="p"
          text={text}
          className="mx-auto block max-w-[26ch] text-center font-display text-[clamp(28px,4.6vw,60px)] font-black leading-[1.6] text-ink"
          wordClassName="text-ink"
          highlightWord={(word) => highlighted.has(word)}
          highlightClassName="text-accent"
          stagger={0.05}
        />
      </Container>
    </section>
  )
}
