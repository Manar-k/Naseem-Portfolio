export interface NavItem {
  id: string
  key: 'about' | 'professional' | 'commercial' | 'numbers' | 'projects' | 'why' | 'summary' | 'Certificates'
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', key: 'about' },
  { id: 'professional', key: 'professional' },
  { id: 'commercial', key: 'commercial' },
  { id: 'numbers', key: 'numbers' },
  { id: 'projects', key: 'projects' },
  { id: 'why', key: 'why' },
  { id: 'Certificates', key: 'Certificates' },
  { id: 'summary', key: 'summary' },
]
