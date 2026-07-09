import { useTranslation } from 'react-i18next'
import { GrLanguage } from 'react-icons/gr'
import { useLang } from '../hooks/useLang'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const { toggleLang } = useLang()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`flex items-center gap-1.5 border border-ink/30 px-2.5 py-1.5 text-xs font-medium text-ink/90 transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
      // className={`flex items-center gap-1.5 rounded-full border border-ink/30 px-4 py-2 text-sm font-medium text-ink/90 transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
      aria-label={t('lang.switchToFull')}
    >
      <GrLanguage className="h-3.5 w-3.5" />
      {t('lang.switchTo')}
    </button>
  )
}