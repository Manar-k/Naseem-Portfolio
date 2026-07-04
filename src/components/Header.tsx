import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowUpRight, HiOutlineXMark } from 'react-icons/hi2'
import { RxHamburgerMenu } from 'react-icons/rx'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from './Container'
import { NAV_ITEMS } from '../utils/nav'
import { useLang } from '../hooks/useLang'

export function Header() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="sticky top-0 z-header border-b border-border/60 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          {lang === 'ar' ? 'نسيم فلفلان' : 'Naseem Filfilan'}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('a11y.openResume')}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 ease-out-quart hover:bg-accent-bright"
          >
            {t('header.resume')}
            <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.toggleMenu')}
        >
          {menuOpen ? <HiOutlineXMark className="h-5 w-5" /> : <RxHamburgerMenu className="h-5 w-5" />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-border/60 bg-bg lg:hidden">
          <Container className="flex flex-col gap-6 py-8">
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-display text-2xl text-ink transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('a11y.openResume')}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg"
              >
                {t('header.resume')}
                <HiOutlineArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
