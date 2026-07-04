import { motion } from 'motion/react'
import { IconArrowDown } from '@tabler/icons-react'
import { WordReveal } from '../components/WordReveal'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { useReducedMotion } from '../hooks/useReducedMotion'

function splitClauses(tagline: string): string[] {
  return tagline
    .split('. ')
    .map((clause, index, arr) => (index < arr.length - 1 ? `${clause}.` : clause))
}

export function Hero() {
  const { lang } = useLang()
  const content = profile[lang]
  const reducedMotion = useReducedMotion()

  const clauses = splitClauses(content.hero.tagline)
  const lastIndex = clauses.length - 1
  let wordOffset = 0

  return (
    <section id="top" className="relative flex min-h-[calc(100vh-70px)] flex-col overflow-hidden px-6 pb-12 pt-8 sm:px-10 sm:pb-16 lg:px-[72px]">
      <div className="grid flex-1 grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-5 text-[15px] font-light text-ink/75 sm:text-lg">
              {content.meta.roles.join(' · ')}
            </p>
          </Reveal>

          <h1 className="m-0 max-w-[16ch] font-display text-[clamp(36px,7vw,96px)] font-black leading-[1.15] text-ink">
            {clauses.map((clause, index) => {
              const delayChildren = 0.5 + wordOffset * 0.09
              const wordCount = clause.split(' ').length
              wordOffset += wordCount
              const isLast = index === lastIndex
              return (
                <WordReveal
                  key={clause}
                  as="span"
                  text={clause}
                  onMount
                  stagger={0.09}
                  delayChildren={delayChildren}
                  className="block"
                  wordClassName={isLast ? 'text-ink' : 'text-accent'}
                />
              )
            })}
          </h1>
        </div>

        <motion.div
          initial={reducedMotion ? undefined : { clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1.1, delay: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[280px] justify-self-center lg:max-w-[380px] lg:justify-self-end"
        >
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute inset-x-5 -inset-y-5 -z-10 animate-frameShift border-2 border-accent ltr:translate-x-2 rtl:-translate-x-2"
            aria-hidden
          />
          <motion.img
            src="/images/naseem-filfilan.png"
            alt={content.meta.name}
            width={420}
            height={420}
            loading="eager"
            className="block aspect-square w-full animate-heroFloat object-cover grayscale contrast-110 brightness-[0.96] transition-[filter] duration-500 hover:grayscale-0 hover:brightness-100"
          />
        </motion.div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal delay={1.6}>
          <p className="m-0 max-w-[42ch] text-[15px] font-normal leading-[2] text-ink/90 sm:text-lg">
            {content.hero.lede}
          </p>
        </Reveal>
        <Reveal delay={1.7}>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/35 px-7 py-3.5 text-sm tracking-[0.12em] text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            {content.hero.ctaPrimary}
            <IconArrowDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-0.5 rtl:rotate-90 rtl:group-hover:-translate-x-0.5" stroke={1.75} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
