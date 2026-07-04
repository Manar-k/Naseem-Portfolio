import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const content = profile[lang]
  const reducedMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute end-[-10%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.10] blur-[110px]"
      />

      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="flex flex-col items-start gap-8">
          <Reveal>
            <p className="font-display text-lg text-accent">{content.hero.kicker}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="max-w-2xl text-balance font-display text-5xl font-medium leading-[1.05] tracking-tightest text-ink sm:text-6xl lg:text-[4.2rem]">
              {content.hero.tagline}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted">{content.hero.lede}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              {content.meta.roles.map((role, index) => (
                <li key={role} className="flex items-center gap-3">
                  {index > 0 ? <span aria-hidden className="text-border">·</span> : null}
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#contact" variant="primary">
                {content.hero.ctaPrimary}
                <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
              </Button>
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('a11y.openResume')}
                variant="secondary"
              >
                {content.hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm justify-self-center lg:justify-self-end"
        >
          <div className="absolute -inset-3 -z-10 rounded-[1.75rem] border border-accent/25" aria-hidden />
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <img
              src="/images/naseem-filfilan.png"
              alt={content.meta.name}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
