import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'

export function Business() {
  const { lang } = useLang()
  const { t } = useTranslation()
  const content = profile[lang]
  const lastContrast = content.business.contrasts[content.business.contrasts.length - 1]

  return (
    <section id="commercial" className="bg-accent px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-[72px]">
      <Container className="max-w-[1200px] p-0">
        <Reveal>
          <p className={`mb-4 text-[13px] font-bold ${lang === 'en' ? 'tracking-[0.18em]' : ''}`}>
            {sectionNumber(3, lang)} — {t('nav.commercial')}
          </p>
        </Reveal>
        <Reveal>
          <p className="m-0 mb-6 max-w-[60ch] text-[clamp(16px,1.4vw,20px)] font-medium leading-[2]">
            {content.business.intro}
          </p>
        </Reveal>
        <Reveal>
          <h2 className="m-0 mb-10 font-display text-[clamp(34px,5.5vw,84px)] font-black leading-[1.4]">
            {lastContrast.less}
            <br />
            {lastContrast.more.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="inline-block rounded-[0.15em] bg-bg px-[0.25em] text-ink">
              {lastContrast.more.split(' ').slice(-1)}
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-white/35 bg-white/35 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="h-full bg-accent p-7 text-[16px] font-medium leading-[1.9]">{content.business.chain[0]} {content.business.chain.slice(1).join(' ')}.</div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full bg-accent p-7 text-[16px] font-medium leading-[1.9]">
              {content.business.closing[0]}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full bg-accent p-7 text-[16px] font-medium leading-[1.9]">{content.business.pullQuote}</div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <div className="flex flex-col text-[16.5px] font-medium leading-[1.9]">
                {content.business.askList.map((item, index) => (
                  <div
                    key={item}
                    className={`flex gap-3 py-3 ${
                      index < content.business.askList.length - 1 ? 'border-b border-white/40' : ''
                    }`}
                  >
                    <span className="font-extrabold">{sectionNumber(index + 1, lang)}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="m-0 mt-6 text-[16px] font-medium leading-[2]">{content.business.closing[1]}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-5 text-[16.5px] font-medium leading-[1.9]">
              {content.business.contrasts.slice(0, -1).map((pair) => (
                <div key={pair.more} className="border-e-[3px] border-white pe-4.5">
                  {pair.less}
                  <br />
                  <strong className="font-extrabold">{pair.more}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
