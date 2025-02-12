import type { MenuItem } from '@/components/UI/Layout/Menu/type'

export type ItemChild = Pick<MenuItem, 'id' | 'label' | 'path'>

export type SideMenuItem = {
  id: string
  category: string
  items: ItemChild[]
}

export type SideMenuItems = SideMenuItem[]
