// import { IconArrowDown } from '@tabler/icons-react'
import { WordReveal } from '../components/WordReveal'
import { Reveal } from '../components/Reveal'
import { HeroBackground } from '../components/HeroBackground'
import { RoleCycler } from '../components/RoleCycler'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

function splitClauses(tagline: string): string[] {
  return tagline
    .split('. ')
    .map((clause, index, arr) => (index < arr.length - 1 ? `${clause}.` : clause))
}

export function Hero() {
  const { lang } = useLang()
  const content = profile[lang]

  const clauses = splitClauses(content.hero.tagline)
  const lastIndex = clauses.length - 1
  let wordOffset = 0

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-70px)] flex-col overflow-hidden px-6 pb-12 pt-8 sm:px-10 sm:pb-16 lg:px-[72px]"
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-1 flex-col justify-end py-10 pt-24">
        <Reveal>
  <img
    src="/images/naseem-filfilan.png"
    alt={content.meta.name}
    width={72}
    height={72}
    loading="eager"
    className="mb-4 h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
  />
</Reveal>
        <Reveal>
          <RoleCycler roles={content.meta.roles} className="text-[15px] font-light text-ink/75 sm:text-lg" />
        </Reveal>

        <div className="relative flow-root">
          {/* <div
            className="relative z-0 float-end mb-3 ms-6 aspect-[4/5] w-[46%] max-w-[280px] overflow-hidden rounded-2xl sm:max-w-[340px] lg:max-w-[400px]"
            aria-hidden={false}
          >
            <img
              src="/images/naseem-filfilan.png"
              alt={content.meta.name}
              width={420}
              height={525}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div> */}

          <h1 className="relative z-10 m-0 mt-10 gap-36 font-display text-[clamp(26px,4.6vw,35px)] font-black leading-[1.18] text-ink sm:mt-14">
            {clauses.map((clause, index) => {
              const delayChildren = 0.3 + wordOffset * 0.07
              const wordCount = clause.split(' ').length
              wordOffset += wordCount
              const isLast = index === lastIndex
              return (
                <WordReveal
                  key={clause}
                  as="span"
                  text={`${clause} `}
                  onMount
                  stagger={0.07}
                  delayChildren={delayChildren}
                  className="block"
                  wordClassName={isLast ? 'text-ink' : 'text-accent'}
                />
              )
            })}
          </h1>
          <br/>
          <Reveal delay={1.1}>
            <p className="m-0 max-w-[42ch] text-[15px] font-normal leading-[2] text-ink/90 sm:text-lg">
              {/* {content.hero.lede} */}
            </p>
          </Reveal>
          {content.hero.lede.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              <p className={`m-0 ${
        index === content.hero.lede.length - 1
          ? 'text-blue-600'
          : 'text-ink/90'
      }`}>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* <div className="mt-6 flex flex-wrap items-end justify-between gap-6"> */}
          {/* <Reveal delay={1.1}>
            <p className="m-0 max-w-[42ch] text-[15px] font-normal leading-[2] text-ink/90 sm:text-lg">
              {content.hero.lede}
            </p>
          </Reveal> */}
          {/* <Reveal delay={1.2}>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/35 px-7 py-3.5 text-sm tracking-[0.12em] text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              {content.hero.ctaPrimary}
              <IconArrowDown
                className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-0.5 rtl:rotate-90 rtl:group-hover:-translate-x-0.5"
                stroke={1.75}
              />
            </a>
          </Reveal> */}
        {/* </div> */}
      </div>
    </section>
  )
}