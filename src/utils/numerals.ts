const ARABIC_INDIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

/** Formats a 1-based section index as a zero-padded two-digit numeral, in Eastern Arabic-Indic digits for Arabic. */
export function sectionNumber(index: number, lang: 'ar' | 'en'): string {
  const padded = String(index).padStart(2, '0')
  if (lang === 'en') return padded
  return padded
    .split('')
    .map((digit) => ARABIC_INDIC_DIGITS[Number(digit)])
    .join('')
}
