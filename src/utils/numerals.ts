const ARABIC_INDIC_DIGITS = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9']

/** Formats a 1-based section index as a zero-padded two-digit numeral, in Eastern Arabic-Indic digits for Arabic. */
export function sectionNumber(index: number, lang: 'ar' | 'en'): string {
  const padded = String(index).padStart(2, '')
  if (lang === 'en') return padded
  return padded
    .split('')
    .map((digit) => ARABIC_INDIC_DIGITS[Number(digit)])
    .join('')
}
