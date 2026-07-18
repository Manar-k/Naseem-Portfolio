import { WordReveal } from '../components/WordReveal'
import { Reveal } from '../components/Reveal'
import { HeroBackground } from '../components/HeroBackground'
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
    src={`${import.meta.env.BASE_URL}images/naseem-filfilan.jpg`}
    alt={content.meta.name}
    width={100}
    height={100}
    loading="eager"
    className="mb-4 h-44 w-44 rounded-full object-cover sm:h-30 sm:w-30"
  />
</Reveal>
        <Reveal>
          <p className="text-[clamp(26px,4.6vw,35px)] font-display text-ink sm:text-lg ">{content.meta.roles[0]}</p>
        </Reveal>

        <div className="relative flow-root">


          <h1 className="relative z-10 m-0 mt-10 gap-36 font-display text-[clamp(26px,4.6vw,35px)]  leading-[1.18] text-ink sm:mt-8">
            {clauses.map((clause, index) => {
              const delayChildren = 0.3 + wordOffset * 0.07
              const wordCount = clause.split(' ').length
              wordOffset += wordCount
              const isLast = index === lastIndex
              return (
                <WordReveal
                  key={clause}
                  as="span"
                  text={clause}
                  onMount
                  stagger={0.07}
                  delayChildren={delayChildren}
                  className="block"
                  wordClassName={isLast ? 'text-ink/90' : 'text-accent/90'}
                />
              )
            })}
          </h1>
          <br/>
          {/* <Reveal delay={0.1}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 border border-ink/30 px-4 py-2 font-display text-[clamp(13px,1.25vw,18px)] text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:gap-2 sm:px-[22px] sm:py-2.5"
            >
              <IconFileTypePdf className="h-4 w-4" stroke={1.75} />
              {content.contact.resumeLabel}
            </a>
          </Reveal> */}
          {/* {content.hero.lede.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              <p className={`m-0 ${
        index === content.hero.lede.length - 1
          ? 'text-blue-600'
          : 'text-ink/90'
      }`}>{paragraph}</p>
            </Reveal>
          ))} */}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {content.meta.roles.map((text, index) => (
            <Reveal key={text} delay={index * 0.08}>
              <span className="inline-block border border-ink/30 px-4 py-2 font-display text-[clamp(13px,1.25vw,18px)] text-ink duration-300 hover:border-accent hover:text-accent sm:px-[22px] sm:py-2.5">
                {text}
              </span>
            </Reveal>
          ))}
        </div>
 
      </div>
    </section>
  )
}