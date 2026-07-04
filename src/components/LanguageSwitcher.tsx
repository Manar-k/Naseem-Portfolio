import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const { toggleLang } = useLang()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`rounded-full border border-border px-4 py-2 text-sm font-medium text-ink/90 transition-colors duration-300 ease-out-quart hover:border-accent/60 hover:text-accent ${className}`}
      aria-label={t('lang.switchTo')}
    >
      {t('lang.switchTo')}
    </button>
  )
}
