<script lang="ts" setup>
import { watch, provide } from 'vue'
import { useViewPoint } from '@/hooks'
import useGridStore from './GridStore'

const { screenWidth, isPhone, isTablet, isLaptop, isDesktop } = useViewPoint()

const grid = useGridStore()

if (grid) {
  provide('grid', grid)
  
  watch(
    screenWidth,
    () => {
      grid.addViewPoint(isPhone.value, isTablet.value, isLaptop.value, isDesktop.value)
    },
    { immediate: true }
  )
}
</script>

<template>
  <slot></slot>
</template>
