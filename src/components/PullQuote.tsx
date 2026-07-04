import type { ElementType, ReactNode } from 'react'
import { useLang } from '../hooks/useLang'

interface PullQuoteProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

/**
 * Editorial emphasis line. Uses italic display type in English; Arabic has
 * no true italic form for these faces, so it falls back to plain weight —
 * the global stylesheet also strips any stray italic when lang="ar".
 */
export function PullQuote({ children, className = '', as: Tag = 'p' }: PullQuoteProps) {
  const { lang } = useLang()
  const italic = lang === 'en' ? 'italic' : ''

  return <Tag className={`font-display ${italic} text-accent ${className}`}>{children}</Tag>
}
