import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Finale() {
  const { lang } = useLang()
  const content = profile[lang]
  const name = content.meta.name

  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface-2 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-0 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[130px] rtl:translate-x-1/2"
      />

      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl leading-snug text-ink sm:text-4xl">
            {name} {content.finale.negations.join(' ')}
          </h2>
        </Reveal>

        <div className="flex max-w-2xl flex-col gap-4">
          {content.finale.body.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="flex flex-col gap-2">
          {content.finale.principles.map((line) => (
            <li key={line} className="text-pretty text-lg leading-relaxed text-ink/90">
              {line}
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="max-w-xl text-balance font-display text-2xl leading-snug text-accent sm:text-3xl">
            {content.finale.signature}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
