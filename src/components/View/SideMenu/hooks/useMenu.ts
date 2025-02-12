import { computed } from 'vue'
import type { SideMenuItems } from '../type'
import useLangStore from '@/stores/LangStore'

const useMenu = () => {
  const t = useLangStore()

  const menus = computed<SideMenuItems>(() => [
    {
      id: 'general',
      category: t.lang.menu.general,
      items: [
        { id: 'button', label: 'Button', path: '/' },
        { id: 'icon', label: 'Icon', path: '/' },
        { id: 'typography', label: 'Typography', path: '/' }
      ]
    }
  ])

  return menus
}

export default useMenu
