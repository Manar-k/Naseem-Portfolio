import { HiMiniArrowLongUp } from 'react-icons/hi2'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Professional() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="professional" className="border-t border-border/60 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading title={content.professional.title} intro={content.professional.intro} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <Reveal>
            <ul className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 sm:p-10">
              {content.professional.questions.map((question) => (
                <li key={question} className="flex items-start gap-4">
                  <HiMiniArrowLongUp className="mt-1.5 h-4 w-4 shrink-0 -rotate-90 text-accent rtl:rotate-90" aria-hidden />
                  <span className="text-lg leading-relaxed text-ink">{question}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-6">
            {content.professional.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.04}>
                <p className="max-w-prose text-pretty text-lg leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="font-display text-2xl text-ink">{content.professional.traitsTitle}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {content.professional.traits.map((trait, index) => (
              <Reveal key={trait} delay={index * 0.03}>
                <div className="flex items-start gap-4 border-t border-border/60 pt-5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-base leading-relaxed text-ink/90">{trait}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="max-w-prose text-pretty text-lg leading-relaxed text-ink">{content.professional.closing}</p>
        </Reveal>
      </Container>
    </section>
  )
}
