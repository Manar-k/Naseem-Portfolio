import { useTranslation } from 'react-i18next'
import { HiOutlineArrowUp } from 'react-icons/hi2'
import { Container } from './Container'
import { profile } from '../data/profile'
import { useLang } from '../hooks/useLang'

export function Footer() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const content = profile[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-bg">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-display text-lg text-ink">{content.meta.name}</p>
        <p className="text-sm text-muted">
          © {year} {content.meta.name} — {t('footer.rights')}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {t('footer.backToTop')}
          <HiOutlineArrowUp className="h-4 w-4" />
        </a>
      </Container>
    </footer>
  )
}
