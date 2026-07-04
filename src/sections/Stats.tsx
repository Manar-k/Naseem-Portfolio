import { Container } from '../components/Container'
import { PullQuote } from '../components/PullQuote'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Stats() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="stats" className="border-t border-border/60 bg-surface/40 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading title={content.stats.title} intro={content.stats.intro} />

        <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {content.stats.items.map((item, index) => (
            <Reveal key={item.label} delay={(index % 4) * 0.05}>
              <div className="flex flex-col gap-2">
                <span className="font-display text-4xl text-ink sm:text-5xl">{item.value}</span>
                <span className="text-sm leading-snug text-muted">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-8 border-t border-border/60 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            {content.stats.closing.map((paragraph) => (
              <p key={paragraph} className="max-w-md text-pretty text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <PullQuote className="text-pretty text-xl sm:text-2xl">{content.stats.pullQuote}</PullQuote>
        </div>
      </Container>
    </section>
  )
}
