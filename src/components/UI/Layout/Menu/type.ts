type MenuItemType = 'text' | 'link'

export type MenuItem = {
  id: string
  label: string
  labelIcon?: string
  type: MenuItemType
  path?: string
  isRoot?: boolean;
  children?: MenuItem[]
}

export type MenuItems = MenuItem[]
