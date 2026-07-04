import { useTranslation } from 'react-i18next'
import { HiOutlineArrowUpRight, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

const PHONE_HREF = '+966509145682'
const EMAIL = 'Naseemfilfilan@gmail.com'
const LINKEDIN = 'linkedin.com/in/naseem-filfilan'

export function Contact() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const content = profile[lang]

  const details = [
    {
      label: content.contact.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: HiOutlineEnvelope,
    },
    {
      label: content.contact.linkedinLabel,
      value: LINKEDIN,
      href: `https://${LINKEDIN}`,
      icon: FaLinkedinIn,
    },
    {
      label: content.contact.phoneLabel,
      value: '+966 50 914 5682',
      href: `tel:${PHONE_HREF}`,
      icon: HiOutlinePhone,
    },
    {
      label: content.contact.locationLabel,
      value: content.meta.location,
      href: undefined,
      icon: HiOutlineMapPin,
    },
  ]

  return (
    <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.55fr_0.45fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
              {content.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted">{content.contact.cta}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={`mailto:${EMAIL}`} variant="primary">
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

        <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border">
          {details.map((detail) => {
            const Icon = detail.icon
            const body = (
              <div className="flex items-center gap-4 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-xs text-muted">{detail.label}</span>
                  <span className="text-base text-ink" dir="ltr">
                    {detail.value}
                  </span>
                </span>
              </div>
            )

            return detail.href ? (
              <a key={detail.label} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {body}
              </a>
            ) : (
              <div key={detail.label}>{body}</div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
