import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from './Container'
import { NAV_ITEMS } from '../utils/nav'
import { useLang } from '../hooks/useLang'

export function Header() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [lang])

  return (
    <header
      className={`sticky top-0 z-header transition-[background-color,backdrop-filter,padding] duration-300 ${
        scrolled ? 'bg-bg/85 py-3.5 backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] shrink-0 animate-pulseDot rounded-full bg-accent" aria-hidden />
          <span className="font-display text-sm font-bold text-ink">
            {lang === 'ar' ? 'نسيم فلفلان' : 'Naseem Filfilan'}
          </span>
        </a>

        <nav className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[12.5px] text-ink/75 transition-colors duration-300 hover:text-accent"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('a11y.openResume')}
            className="text-[12.5px] text-ink/75 transition-colors duration-300 hover:text-accent"
          >
            {t('header.resume')}
          </a> */}
          <a
            href="#contact"
            className="rounded-full border border-ink/30 px-[18px] py-2 text-[12.5px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {t('header.contactCta')}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-ink/30 text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.toggleMenu')}
        >
          {menuOpen ? <IconX className="h-5 w-5" stroke={1.75} /> : <IconMenu2 className="h-5 w-5" stroke={1.75} />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-ink/10 bg-bg lg:hidden">
          <Container className="flex flex-col gap-6 py-8">
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-display text-xl font-bold text-ink transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="rounded-full border border-ink/30 px-5 py-2.5 text-sm text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {t('header.contactCta')}
              </a>
              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('a11y.openResume')}
                className="text-sm text-ink/75 underline underline-offset-4"
              >
                {t('header.resume')}
              </a> */}
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
