<script setup lang="ts">
import { Typography, Divider } from '@/components/UI'
import SideMenuItem from './SideMenuItem.vue'
import useMenu from './hooks/useMenu'

const { Paragraph } = Typography

const menus = useMenu()
</script>

<template>
  <div class='side-menu'>
    <template v-for="menu in menus" :key="menu.id">
      <Paragraph variant='secondary'>{{ menu.category }}</Paragraph>
      <Divider rootClassName="menu-divider"/>
      <SideMenuItem v-for="item in menu.items" :key="item.id" :item="item" />
    </template>
  </div>
</template>
