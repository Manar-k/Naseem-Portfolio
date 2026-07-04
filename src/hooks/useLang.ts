import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { SupportedLang } from '../i18n'
import type { Lang } from '../data/profile'

/**
 * Keeps <html lang>/[dir]/[data-lang] in sync with i18next so CSS (RTL
 * logical properties, per-language font stacks) and SEO stay correct.
 */
export function useLang() {
  const { i18n } = useTranslation()
  const lang = (i18n.language?.split('-')[0] as SupportedLang) || 'ar'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    document.documentElement.dataset.lang = lang
  }, [lang, dir])

  const setLang = (next: SupportedLang) => {
    void i18n.changeLanguage(next)
  }

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar')

  return { lang: lang as Lang, dir, setLang, toggleLang }
}
