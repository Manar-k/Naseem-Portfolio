import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ar from './locales/ar/translation.json'
import en from './locales/en/translation.json'

export const supportedLangs = ['ar', 'en'] as const
export type SupportedLang = (typeof supportedLangs)[number]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: 'ar',
    supportedLngs: supportedLangs,
    // Only trust a language the visitor explicitly chose before; otherwise
    // always start on Arabic (fallbackLng) regardless of browser locale.
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'naseem-lang',
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
