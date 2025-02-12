import type { MenuItem } from '@/components/UI/Layout/Menu/type'

export type SideMenuItem = {
  id: string
  category: string
  items: Pick<MenuItem, 'id' | 'label' | 'path'>[]
}

export type SideMenuItems = SideMenuItem[]
