import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Projects() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="projects" className="border-y border-ink/10 bg-surface px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="max-w-[1280px] p-0">
        <Eyebrow index={5} label={t('nav.projects')} />
        <h2 className="m-0 mb-6 font-display text-[clamp(30px,3.6vw,54px)] font-black leading-[1.5] text-ink">
          {content.projects.title}
        </h2>
        <p className="m-0 mb-14 max-w-[60ch] text-[clamp(15px,1.3vw,18px)] font-light leading-[2] text-ink/85 sm:mb-16">
          {content.projects.intro}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.projects.items.map((project) => (
            <Reveal key={project.name}>
              <div className="group h-full border border-ink/20 p-7 transition-colors duration-300 hover:border-accent hover:bg-accent sm:p-11">
                <div className="mb-5 text-[13px] tracking-[0.16em] text-ink/70 group-hover:text-white/80">
                  {project.kind}
                </div>
                <h3 className="m-0 mb-4 font-display text-[clamp(26px,2.6vw,38px)] font-black text-ink group-hover:text-white">
                  {project.name}
                </h3>
                <p className="m-0 text-[16px] leading-[2] text-ink/85 group-hover:text-white/90">
                  {project.description}
                </p>
                <div className="mt-6 font-display font-extrabold text-accent group-hover:text-white">
                  {project.tagline}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-14 max-w-[34ch] text-center font-display text-[clamp(19px,2vw,28px)] font-extrabold leading-[1.9] text-ink sm:mt-16">
            {content.projects.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
