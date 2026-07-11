import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from './Container'
import { NAV_ITEMS } from '../utils/nav'
import { useLang } from '../hooks/useLang'

// The business/commercial section uses a light (ink-colored) background, unlike the
// rest of the page. The mobile header bar (light text on a transparent background)
// becomes unreadable over it, so it flips to dark text while that section sits under it.
const LIGHT_BG_SECTION_ID = 'commercial'

export function Header() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onLightSection, setOnLightSection] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)

    const headerHeight = headerRef.current?.offsetHeight ?? 0
    const lightSection = document.getElementById(LIGHT_BG_SECTION_ID)
    if (lightSection) {
      const rect = lightSection.getBoundingClientRect()
      setOnLightSection(rect.top < headerHeight && rect.bottom > 0)
    }
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

  const renderName = (invert: boolean) => (
    <a href="#top" className="flex items-center gap-2.5" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <span className="h-[7px] w-[7px] shrink-0 animate-pulseDot rounded-full bg-accent" aria-hidden />
      <span className={`font-display text-sm font-bold ${invert ? 'text-surface' : 'text-ink'}`}>
        {lang === 'ar' ? 'نســــــيم فلفلان' : 'Naseem Filfilan'}
      </span>
    </a>
  )
  const renderContact = (invert: boolean) => (
    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className={`border px-2.5 py-1.5 text-[12px] font-display transition-colors duration-300 hover:border-accent hover:text-accent ${
        invert ? 'border-surface/30 text-surface' : 'border-ink/30 text-ink'
      }`}
    >
      {t('header.contactCta')}
    </a>
  )
  const contactNode = renderContact(false)

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-header bg-transparent transition-[padding,backdrop-filter] duration-300 ${
  scrolled ? 'bg-bg/60 py-5 backdrop-blur-sm' : 'bg-transparent py-5'
}`}
    >
      <Container>
        {/* Slot order (contact / nav+lang / name) is fixed left-to-right regardless of
            page language; only the text runs inside each slot follow the active dir. */}
        <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-4 lg:grid" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
  <div className="justify-self-start">{renderName(onLightSection)}</div>

  <div className="flex items-center justify-center gap-x-5 gap-y-2">
    <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`text-[12.5px] transition-colors duration-300 hover:text-accent font-display ${
            onLightSection ? 'text-surface/75' : 'text-ink/75'
          }`}
        >
          {t(`nav.${item.key}`)}
        </a>
      ))}
    </nav>
    {renderContact(onLightSection)}
  </div>

  <div className="justify-self-end">
    <LanguageSwitcher invert={onLightSection} />
  </div>
</div>

        <div className="relative z-10 flex items-center justify-between lg:hidden">
          {renderName(onLightSection && !menuOpen)}
          <button
            type="button"
            className={`grid h-9 w-9 place-items-center border transition-colors duration-300 ${
              onLightSection && !menuOpen ? 'border-surface/30 text-surface' : 'border-ink/30 text-ink'
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.toggleMenu')}
          >
            {menuOpen ? <IconX className="h-5 w-5" stroke={1.75} /> : <IconMenu2 className="h-5 w-5" stroke={1.75} />}
          </button>
        </div>
      </Container>

      {menuOpen
        ? createPortal(
            <div className="fixed inset-0 z-header flex flex-col overflow-y-auto bg-bg lg:hidden">
              <Container className="flex min-h-full flex-col justify-center gap-6 py-24">
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
                  {contactNode}
                  <LanguageSwitcher />
                </div>
              </Container>
            </div>,
            document.body,
          )
        : null}
    </header>
  )
}