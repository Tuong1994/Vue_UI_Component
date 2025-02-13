<script setup lang="ts">
import { computed } from 'vue'
import { Typography, Divider } from '@/components/UI'
import SideMenuItem from './SideMenuItem.vue'
import useMenu from './hooks/useMenu'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const menus = useMenu()

const layout = useLayoutStore();

const themeClassName = computed<string>(() => `side-menu-${layout.theme}`)
</script>

<template>
  <div :class="['side-menu', themeClassName]">
    <div v-for="menu in menus" :key="menu.id" class="menu-group">
      <Paragraph variant='secondary' rootClassName="group-category">{{ menu.category }}</Paragraph>
      <Divider rootClassName="group-divider"/>
      <SideMenuItem v-for="item in menu.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
