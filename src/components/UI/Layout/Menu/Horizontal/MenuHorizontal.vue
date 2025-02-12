<script setup lang="ts">
import { ref, computed, withDefaults, type StyleValue } from 'vue'
import type { MenuItems } from '../type.ts'
import type { LayoutColor } from '../../type.ts'
import MenuHorizontalItem from './MenuHorizontalItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore.ts'

export interface MenuHorizontalProps {
  rootClassName?: string
  itemClassName?: string
  rootStyle?: StyleValue
  itemStyle?: StyleValue
  items?: MenuItems
  color?: LayoutColor
}

const props = withDefaults(defineProps<MenuHorizontalProps>(), {
  rootClassName: '',
  itemClassName: '',
  color: 'blue',
  items: () => []
})

const layout = useLayoutStore()

const activeIds = ref<string[]>([])

const menuColor = computed<LayoutColor>(() => (layout.isLayout ? layout.color : props.color))

const layoutClassName = computed<string>(() => (layout.isLayout ? 'menu-horizontal-layout' : ''))

const colorClassName = computed<string>(() => `menu-horizontal-${menuColor.value}`)

const handleOpenMenu = (id: string) => {
  const idx = activeIds.value.indexOf(id)
  if (idx === -1) activeIds.value = [...activeIds.value, id]
  else activeIds.value = [...activeIds.value].filter((active) => active !== id)
}
</script>

<template>
  <div :style="rootStyle" :class="['menu-horizontal', colorClassName, layoutClassName, rootClassName]">
    <MenuHorizontalItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :activeIds="activeIds"
      :itemClassName="itemClassName"
      @onOpenMenu="handleOpenMenu"
    />
  </div>
</template>
