<script setup lang="ts">
import { computed, withDefaults, watchEffect, toRefs, inject, type StyleValue } from 'vue'
import type { ComponentJustify, ComponentAligns } from '@/common/type.ts'

export interface GridRowProps {
  rootClassName?: string
  rootStyle?: StyleValue
  justify?: ComponentJustify
  aligns?: ComponentAligns
  gutters?: [number?, number?]
}

const props = withDefaults(defineProps<GridRowProps>(), {
  rootClassName: '',
  justify: 'start',
  aligns: 'top',
  gutters: () => []
})

const { rootStyle } = toRefs(props)

const grid = inject('grid', null) as any

const justifyClassName = computed<string>(() => `grid-row-${props.justify}`)

const alignClassName = computed<string>(() => `grid-row-${props.aligns}`)

const inlineStyle = computed<StyleValue>(() => {
  const style = rootStyle?.value as object
  if (!props.gutters.length) return { ...style, gap: '10px' }
  if (props.gutters.length === 1) return { ...style, gap: `${props.gutters[0]}px` }
  if (props.gutters.length === 2)
    return { ...style, rowGap: `${props.gutters[0]}px`, columnGap: `${props.gutters[1]}px` }
  return { ...style }
})

watchEffect(() => {
  if (!props.gutters.length) return
  if (props.gutters.length === 1) return grid?.addGutters(props.gutters[0] as number)
  if (props.gutters.length === 2) return grid?.addGutters(props.gutters[0] as number, props.gutters[1])
})
</script>

<template>
  <div :style="inlineStyle" :class="['grid-row', justifyClassName, alignClassName, rootClassName]">
    <slot></slot>
  </div>
</template>
