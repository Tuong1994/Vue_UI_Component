<script setup lang="ts">
import { Typography, Divider } from '@/components/UI'
import useMenu from './hooks/useMenu'

const { Paragraph } = Typography

const menus = useMenu()
</script>

<template>
  <template v-for="menu in menus" :key="menu.id">
    <Paragraph>{{ menu.category }}</Paragraph>
  </template>
</template>
