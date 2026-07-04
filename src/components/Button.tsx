import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out-quart focus-visible:outline-offset-4'

  const variants: Record<string, string> = {
    primary: 'bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border border-border text-ink hover:border-accent/60 hover:text-accent hover:-translate-y-0.5 active:translate-y-0',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
