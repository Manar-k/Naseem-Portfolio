import { Container } from '../components/Container'
import { PullQuote } from '../components/PullQuote'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function About() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading title={content.about.title} />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
          <div className="flex max-w-prose flex-col gap-6">
            {content.about.intro.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}>
                <p className="text-pretty text-lg leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <PullQuote className="max-w-lg text-pretty text-2xl leading-snug sm:text-3xl">
                {content.about.pullQuote}
              </PullQuote>
            </Reveal>

            {content.about.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                <p className="text-pretty text-lg leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <p className="text-pretty font-display text-xl leading-relaxed text-ink">{content.about.summary}</p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border">
            <div className="flex flex-1 flex-col gap-4 bg-surface p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted/80">
                {content.about.dual.insideTitle}
              </p>
              <p className="text-pretty text-lg leading-relaxed text-ink">{content.about.dual.insideText}</p>
            </div>
            <div className="flex flex-1 flex-col gap-4 bg-surface-2 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent/90">
                {content.about.dual.outsideTitle}
              </p>
              <p className="text-pretty text-lg leading-relaxed text-ink">{content.about.dual.outsideText}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
