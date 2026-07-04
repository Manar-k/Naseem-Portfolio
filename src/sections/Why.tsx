import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Why() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section className="border-t border-border/60 py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={content.why.title} intro={content.why.intro} />

        <div className="flex flex-col gap-3">
          {content.why.contrasts.map((line, index) => (
            <Reveal key={line} delay={index * 0.04}>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="max-w-3xl text-pretty font-display text-2xl leading-snug text-ink sm:text-3xl">
            {content.why.unifier}
          </p>
        </Reveal>

        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {content.why.capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-border px-5 py-2.5 text-sm text-ink/90 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                {capability}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="max-w-prose text-pretty text-lg leading-relaxed text-muted">{content.why.closing}</p>
        </Reveal>
      </Container>
    </section>
  )
}
