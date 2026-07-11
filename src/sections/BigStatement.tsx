import { WordReveal } from '../components/WordReveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

function highlightedWords(text: string): Set<string> {
  const words = text.trim().split(/\s+/)
  const highlights = new Set<string>()

  // Highlight the word before each comma
  words.forEach((word, index) => {
    if ((word.endsWith('،') || word.endsWith(',')) && index > 0) {
      highlights.add(words[index])
    }
  })

  // Highlight the last two words
  if (words.length >= 2) {
    highlights.add(words[words.length - 1])
    highlights.add(words[words.length - 2])
  }

  return highlights
}

/** The last word of each comma-separated clause carries the emphasis, matching the source design. */
// function lastWordsOfClauses(text: string): Set<string> {
//   const clauses = text.split(/[،,]\s*/)
//   const lastWords = clauses.map((clause) => {
//     const words = clause.trim().split(' ')
//     return words[words.length - 1]
//   })
//   return new Set(lastWords)
// }

export function BigStatement() {
  const { lang } = useLang()
  const content = profile[lang]
  const text = content.about.summary
  // const highlighted = lastWordsOfClauses(text)
const highlighted = highlightedWords(text)
  return (
    <section className="border-y border-ink/10 bg-surface px-6 py-16 sm:px-10 sm:py-24 lg:px-[72px] lg:py-28">
      <WordReveal
        key={text}
        as="p"
        text={text}
        className="mx-auto block max-w-[42ch] text-center font-display text-[clamp(16px,4.6vw,55px)] font-black leading-[1.6] text-ink"
        wordClassName="text-ink"
        highlightWord={(word) => highlighted.has(word)}
        highlightClassName="text-accent"
        stagger={0.05}
      />
    </section>
  )
}
