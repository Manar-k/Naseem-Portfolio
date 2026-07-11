import { useTranslation } from 'react-i18next'
import { GrLanguage } from 'react-icons/gr'
import { useLang } from '../hooks/useLang'

export function LanguageSwitcher({ className = '', invert = false }: { className?: string; invert?: boolean }) {
  const { t } = useTranslation()
  const { toggleLang } = useLang()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`flex items-center gap-1.5 border px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 hover:border-accent hover:text-accent ${invert ? 'border-surface/30 text-surface/90' : 'border-ink/30 text-ink/90'} ${className}`}
      aria-label={t('lang.switchToFull')}
    >
      <GrLanguage className="h-3.5 w-3.5" />
      {t('lang.switchTo')}
    </button>
  )
}