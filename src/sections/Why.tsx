import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { IconArrowDownRight } from '@tabler/icons-react'
import { SectionTitle } from '../components/SectionTitle'

function splitContrast(line: string): [string, string] {
  const marker = line.includes('..') ? '..' : '.. '
  const idx = line.indexOf(marker)
  if (idx === -1) return [line, '']
  return [line.slice(0, idx).trim(), line.slice(idx + marker.length).trim()]
}

export function Why() {
  const { lang } = useLang()
    const { t } = useTranslation()
  const content = profile[lang]

  return (
    <section id="why" className="mx-auto max-w-[1100px] px-6 py-12 sm:px-10 sm:py-10 lg:px-[72px]">
      <Container className="p-0">
        <SectionTitle title={t('nav.why')} className="mb-14 sm:mb-20" />
        <h2 className="m-0 mb-6 font-display text-[clamp(24px,3vw,44px)] font-black leading-[1.5] text-ink">
          {content.why.title}
        </h2>

        <Reveal>
          <div className="border-r-2 border-accent pr-6">
            <p className="m-0 text-[clamp(15px,1.25vw,18px)] font-light">
              {content.why.intro}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div className="flex flex-col gap-7 text-[clamp(15px,1.25vw,18px)] font-light leading-[2.1]">
            <div className="flex flex-col text-[clamp(12px,1.7vw,15px)] font-light leading-[1.9]">
          {content.why.contrasts.map((line, index) => {
            const [lead, answer] = splitContrast(line)
            return (
              <Reveal key={line} delay={index * 0.04}>
                <div
                  className={`flex flex-wrap items-center justify-between gap-4 py-5 ${
                    index < content.why.contrasts.length - 1 ? 'border-b border-ink/15' : ''
                  }`}
                >
                  <span>{lead}..</span>
                  <span className="font-medium text-accent">{answer}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
          </div>
          <Reveal>
            <div className="border border-ink/20 p-6 sm:p-9">
              <div className="mb-5 font-display text-xl font-extrabold text-accent">
                {content.why.unifier[0]}
              </div>
              <div className="flex flex-col text-[15.5px] leading-[1.9]">
                {content.why.unifier.slice(1).map((trait, index) => (
                  <div
                    key={trait}
                    className={`flex gap-3 py-3 ${
                      index < content.why.unifier.length - 2 ? 'border-b border-ink/10' : ''
                    }`}
                  >
                    <span className="text-accent">›</span>
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* <div className="flex flex-col text-[clamp(12px,1.7vw,20px)] font-light leading-[1.9]">
          {content.why.contrasts.map((line, index) => {
            const [lead, answer] = splitContrast(line)
            return (
              <Reveal key={line} delay={index * 0.04}>
                <div
                  className={`flex flex-wrap items-center justify-between gap-4 py-5 ${
                    index < content.why.contrasts.length - 1 ? 'border-b border-ink/15' : ''
                  }`}
                >
                  <span>{lead}..</span>
                  <span className="font-medium text-accent">{answer}</span>
                </div>
              </Reveal>
            )
          })}
        </div> */}

        {/* <Reveal>
          <p className="m-0 mt-12 font-display text-[clamp(20px,2.2vw,32px)] font-extrabold leading-[1.8] text-ink">
            {content.why.unifier}
          </p>
        </Reveal> */}

        <Reveal>
          <div className="border-r-2 border-accent pr-6">
            <p className="m-0 text-[clamp(15px,1.25vw,18px)] font-light">
              {content.why.explain[0]} <br />
              {content.why.explain[1]}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {content.why.capabilities.map((capability, index) => {
              const isEmphasized = index >= content.why.capabilities.length - 3
              return (
                <span
                  key={capability}
                  className={` border px-[22px] py-2.5 font-display text-[clamp(15px,1.25vw,18px)] ${
                    isEmphasized ? 'border-accent text-ink' : 'border-accent text-ink'
                  }`}
                >
                  {capability}
                </span>
              )
            })}
          </div>
        </Reveal>

        {/* <Reveal>
          <p className="m-0 mt-10 text-[clamp(15px,1.3vw,18px)] font-light leading-[2.1]">
            <strong className="font-bold text-ink">{content.why.closing}</strong>
          </p>
        </Reveal> */}
          <Reveal>
          <div className="border-r-2 border-accent pr-6">
            <p className="mt-12 mb-5 text-[clamp(15px,1.25vw,18px)] font-light">
              {content.why.closing[0]}
            </p>
          </div>
        </Reveal>

          <Reveal>
            <div className="flex flex-col gap-3.5 font-display text-[clamp(12px,1.5vw,15px)] font-bold leading-[1.9]">
              {content.why.closing.slice(1).map((item) => (
                <div key={item} className="flex items-baseline gap-3.5">
                  <IconArrowDownRight
                    className="h-4 w-4 shrink-0 -translate-y-0.5 text-accent rtl:-scale-x-100"
                    stroke={2.25}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
      </Container>
    </section>
  )
}
