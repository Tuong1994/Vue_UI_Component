<script lang="ts" setup>
import { watch, provide } from 'vue'
import { useViewPoint } from '@/hooks'
import useFlexStore from './FlexStore'

const { screenWidth, isPhone, isTablet, isLaptop, isDesktop } = useViewPoint()

const flex = useFlexStore()

if (flex) {
  provide('flex', flex)
  
  watch(
    screenWidth,
    () => {
      flex.addViewPoint(isPhone.value, isTablet.value, isLaptop.value, isDesktop.value)
    },
    { immediate: true }
  )
}
</script>

<template>
  <slot></slot>
</template>