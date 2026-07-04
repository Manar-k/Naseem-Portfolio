import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

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
    <section id="why" className="mx-auto max-w-[1100px] px-6 py-24 sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="p-0">
        <Eyebrow index={6} label={t('nav.why')} />
        <h2 className="m-0 mb-10 font-display text-[clamp(30px,3.6vw,54px)] font-black leading-[1.5] text-ink">
          {content.why.title}
        </h2>

        <div className="flex flex-col text-[clamp(17px,1.7vw,24px)] font-light leading-[1.9]">
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
                  <span className="font-bold text-accent">{answer}</span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="m-0 mt-12 font-display text-[clamp(20px,2.2vw,32px)] font-extrabold leading-[1.8] text-ink">
            {content.why.unifier}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {content.why.capabilities.map((capability, index) => {
              const isEmphasized = index >= content.why.capabilities.length - 3
              return (
                <span
                  key={capability}
                  className={`rounded-full border px-[22px] py-2.5 font-display text-[15px] font-bold ${
                    isEmphasized ? 'border-accent text-accent' : 'border-ink/25 text-ink'
                  }`}
                >
                  {capability}
                </span>
              )
            })}
          </div>
        </Reveal>

        <Reveal>
          <p className="m-0 mt-10 text-[clamp(15px,1.3vw,18px)] font-light leading-[2.1]">
            <strong className="font-bold text-ink">{content.why.closing}</strong>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
