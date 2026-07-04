export interface NavItem {
  id: string
  key: 'about' | 'professional' | 'business' | 'stats' | 'projects' | 'contact'
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', key: 'about' },
  { id: 'professional', key: 'professional' },
  { id: 'business', key: 'business' },
  { id: 'stats', key: 'stats' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
]
