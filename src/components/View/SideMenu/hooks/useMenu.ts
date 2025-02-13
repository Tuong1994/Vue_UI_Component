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
    },
    {
      id: 'layout',
      category: t.lang.menu.layout,
      items: [
        { id: 'divider', label: 'Divider', path: '/' },
        { id: 'flex', label: 'Flex', path: '/' },
        { id: 'grid', label: 'Grid', path: '/' },
        { id: 'layout', label: 'Layout', path: '/' },
        { id: 'space', label: 'Space', path: '/' }
      ]
    },
    {
      id: 'navigation',
      category: t.lang.menu.navigation,
      items: [
        { id: 'breadcrumb', label: 'Breadcrumb', path: '/' },
        { id: 'dropdown', label: 'Dropdown', path: '/' },
        { id: 'pagination', label: 'Pagination', path: '/' }
      ]
    },
    {
      id: 'dataEntry',
      category: t.lang.menu.dataEntry,
      items: [
        { id: 'form', label: 'Form', path: '/' },
        { id: 'input', label: 'Input', path: '/' },
        { id: 'inputNumber', label: 'Input Number', path: '/' },
        { id: 'inputPhone', label: 'Input Phone', path: '/' },
        { id: 'inputPassword', label: 'Input Password', path: '/' },
        { id: 'textarea', label: 'Textarea', path: '/' },
        { id: 'select', label: 'Select', path: '/' },
        { id: 'selectTag', label: 'Select Tag', path: '/' },
        { id: 'treeSelect', label: 'Tree Select', path: '/' },
        { id: 'datepicker', label: 'Datepicker', path: '/' },
        { id: 'checkbox', label: 'Checkbox', path: '/' },
        { id: 'radio', label: 'Radio', path: '/' },
        { id: 'upload', label: 'Upload', path: '/' }
      ]
    },
    {
      id: 'dataDisplay',
      category: t.lang.menu.dataDisplay,
      items: [
        { id: 'avatar', label: 'Avatar', path: '/' },
        { id: 'badge', label: 'Badge', path: '/' },
        { id: 'card', label: 'Card', path: '/' },
        { id: 'carousel', label: 'Carousel', path: '/' },
        { id: 'image', label: 'Image', path: '/' },
        { id: 'list', label: 'List', path: '/' },
        { id: 'table', label: 'Table', path: '/' },
        { id: 'tooltip', label: 'Tooltip', path: '/' },
        { id: 'tabs', label: 'Tabs', path: '/' },
        { id: 'accordion', label: 'Accordion', path: '/' }
      ]
    },
    {
      id: 'feedback',
      category: t.lang.menu.feedback,
      items: [
        { id: 'alert', label: 'Alert', path: '/' },
        { id: 'message', label: 'Message', path: '/' },
        { id: 'drawer', label: 'Drawer', path: '/' },
        { id: 'modal', label: 'Modal', path: '/' },
        { id: 'loading', label: 'Loading', path: '/' }
      ]
    }
  ])

  return menus
}

export default useMenu
