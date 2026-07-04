import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from 'react-icons/hi2'
import { Container } from '../components/Container'
import { PullQuote } from '../components/PullQuote'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Business() {
  const { lang } = useLang()
  const content = profile[lang]
  const ArrowIcon = lang === 'ar' ? HiMiniArrowLongLeft : HiMiniArrowLongRight

  return (
    <section id="business" className="border-t border-border/60 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading title={content.business.title} intro={content.business.intro} size="md" />

        <Reveal>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {content.business.askList.map((item) => (
              <li key={item} className="text-lg leading-relaxed text-ink/90">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 rounded-2xl border border-border bg-surface px-6 py-8 sm:px-10">
            {content.business.chain.map((step, index) => (
              <span key={step} className="flex items-center gap-3">
                {index > 0 ? <ArrowIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden /> : null}
                <span className="font-display text-lg text-ink sm:text-xl">{step}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {content.business.contrasts.map((pair, index) => (
            <Reveal key={pair.more} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-t border-border/60 pt-6 sm:grid-cols-[1fr_1fr] sm:gap-8">
                <p className="text-base text-muted">{pair.less}</p>
                <p className="text-lg font-medium text-ink">{pair.more}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {content.business.closing.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.04}>
              <p className="max-w-prose text-pretty text-lg leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PullQuote className="max-w-2xl text-pretty text-2xl leading-snug sm:text-3xl">
            {content.business.pullQuote}
          </PullQuote>
        </Reveal>
      </Container>
    </section>
  )
}
