// import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
// import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { Fragment } from 'react'

export function Projects() {
  const { lang } = useLang()
  // const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="projects" className="border-y border-ink/10 bg-surface px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="max-w-[1280px] p-0">
        {/* <SectionTitle title={t('nav.projects')} className="mb-14 sm:mb-20" /> */}
        <h2 className="m-0 mb-6 font-display text-[clamp(24px,3vw,44px)] font-black leading-[1.5] text-ink">
          {content.projects.title}
        </h2>
        <p className="mx-0 m-0 mb-12 max-w-[60ch] text-[clamp(11px,1.25vw,14px)] font-light leading-[2] text-ink/85 sm:mb-16">
          {content.projects.intro[0]} <br />
          {content.projects.intro[1]}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.projects.items.map((project) => (
            <Reveal key={project.name}>
              <div className="group h-full border border-ink/20 p-7 transition-colors duration-300 hover:border-accent hover:bg-accent sm:p-11">
                <img
                  src={project.image}
                  alt={project.name}
                  className="mb-5 h-48 w-full object-cover"
                />
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

        {/* <Reveal>
          <p className="mx-auto mt-14 max-w-[34ch] text-center font-display text-[clamp(19px,2vw,28px)] font-extrabold leading-[1.9] text-ink sm:mt-16">
            {content.projects.closing}
          </p>
        </Reveal> */}
        <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-light leading-[1.9] mt-10">
                <div  className="border-r-[3px] border-accent pr-6 py-3">
                  <p>{content.projects.closing[0]}</p>
                </div>
            </div>
          </Reveal>
        <Reveal>
                <div
                  dir="rtl"
                  className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
                >
                  {content.projects.closing.slice(1).map((word, index, arr) => (
                    <Fragment key={word}>
                      <span
                        className={`font-display text-[clamp(2rem,8vw,4.5rem) text-medium] ${
                          index === arr.length - 1 ? "text-ink" : "text-ink"
                        }`}
                      >
                        {word}
                      </span>
                
                      {index < arr.length - 1 && (
                        <span className="text-accent text-2xl sm:text-4xl">━</span>
                      )}
                    </Fragment>
                  ))}
                </div>
                </Reveal>
      </Container>
    </section>
  )
}
