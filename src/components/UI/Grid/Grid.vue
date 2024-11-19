<script setup lang="ts">
import { computed, defineProps, ref, withDefaults, watchEffect, type StyleValue } from 'vue'
import { useViewPoint } from '@/hooks'
import type { GridCols } from './type'

interface GridProps {
  rootClassName?: string
  rootStyle?: StyleValue
  gap?: [number?, number?]
  xs?: GridCols
  md?: GridCols
  lg?: GridCols
  span?: GridCols
}

const props = withDefaults(defineProps<GridProps>(), {
  xs: 0,
  md: 0,
  lg: 0,
  span: 0,
  gap: () => [10],
  rootClassName: ''
})

const { isPhone, isTablet, isLaptop, isDesktop } = useViewPoint()

const cols = ref<GridCols>(props.span)

const gridColumns = computed<string>(() => {
  if (cols.value === 0) return 'auto'
  return `repeat(${cols.value}, 1fr)`
})

const gridRowGap = computed<string>(() => {
  const gaps = props.gap
  return `${gaps[0]}px`
})

const gridColGap = computed<string>(() => {
  const gaps = props.gap
  return `${!gaps[1] ? 10 : gaps[1]}px`
})

const gridStyle = computed<StyleValue>(() => ({
  ...(props.rootStyle as object),
  gridTemplateColumns: gridColumns.value,
  gridRowGap: gridRowGap.value,
  gridColumnGap: gridColGap.value
}))

watchEffect(() => {
  if (isDesktop.value) return (cols.value = props.span)

  if (isPhone.value) return (cols.value = props.xs)

  if (isTablet.value) return (cols.value = props.md)

  if (isLaptop.value) return (cols.value = props.lg)

  if (props.xs === 0 || props.md === 0 || props.lg === 0) cols.value = 0
})
</script>

<template>
  <div :style="gridStyle" :class="['grid', rootClassName]">
    <slot></slot>
  </div>
</template>
