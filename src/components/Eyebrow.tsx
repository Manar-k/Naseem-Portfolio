import { useLang } from '../hooks/useLang'
import { sectionNumber } from '../utils/numerals'
import { Reveal } from './Reveal'

interface EyebrowProps {
  index: number
  label: string
  tone?: 'accent' | 'white'
  className?: string
}

export function Eyebrow({ index, label, tone = 'accent', className = '' }: EyebrowProps) {
  const { lang } = useLang()
  const toneClass = tone === 'white' ? 'text-white' : 'text-accent'

  return (
    <Reveal>
      <p className={`mb-4 text-[13px] ${lang === 'en' ? 'tracking-[0.18em]' : ''} ${toneClass} ${className}`}>
        {sectionNumber(index, lang)} {lang === 'ar' ? '—' : '—'} {label}
      </p>
    </Reveal>
  )
}
