import { Container } from '../components/Container'
import { PullQuote } from '../components/PullQuote'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Projects() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <section id="projects" className="border-t border-border/60 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading title={content.projects.title} intro={content.projects.intro} />

        <div className="flex flex-col gap-6">
          {content.projects.items.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <Reveal key={project.name}>
                <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-[0.4fr_0.6fr]">
                  <div
                    className={`flex items-center justify-center bg-surface-2 p-12 lg:p-16 ${
                      reversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="font-display text-8xl text-accent/70 sm:text-9xl">
                      {project.name.trim().charAt(0)}
                    </span>
                  </div>
                  <div
                    className={`flex flex-col gap-5 p-8 sm:p-10 lg:p-12 ${
                      reversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-xs font-medium text-muted">{project.kind}</p>
                    <h3 className="font-display text-3xl text-ink sm:text-4xl">{project.name}</h3>
                    <PullQuote className="text-lg">{project.tagline}</PullQuote>
                    <p className="max-w-prose text-pretty text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="max-w-prose text-pretty text-lg leading-relaxed text-ink">{content.projects.closing}</p>
        </Reveal>
      </Container>
    </section>
  )
}
