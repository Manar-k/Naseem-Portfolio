export interface NavItem {
  id: string
  key: 'about' | 'professional' | 'commercial' | 'numbers' | 'projects' | 'why' | 'summary' | 'Certificates'
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', key: 'about' },
  { id: 'Certificates', key: 'Certificates' },
  { id: 'numbers', key: 'numbers' },
  { id: 'professional', key: 'professional' },
  { id: 'commercial', key: 'commercial' },
  { id: 'projects', key: 'projects' },
  { id: 'why', key: 'why' },
  { id: 'summary', key: 'summary' },
]
