<script setup lang="ts">
import { computed, withDefaults, watchEffect, toRefs, inject, type StyleValue } from 'vue'
import type { ComponentJustify, ComponentAligns } from '@/common/type.ts'

export interface FlexRowProps {
  rootClassName?: string
  rootStyle?: StyleValue
  justify?: ComponentJustify
  aligns?: ComponentAligns
  gutters?: [number?, number?]
}

const props = withDefaults(defineProps<FlexRowProps>(), {
  rootClassName: '',
  justify: 'start',
  aligns: 'top',
  gutters: () => []
})

const { rootStyle } = toRefs(props)

const flex = inject('flex', null) as any

const justifyClassName = computed<string>(() => `flex-row-${props.justify}`)

const alignClassName = computed<string>(() => `flex-row-${props.aligns}`)

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
  if (props.gutters.length === 1) return flex?.addGutters(props.gutters[0] as number)
  if (props.gutters.length === 2) return flex?.addGutters(props.gutters[0] as number, props.gutters[1])
})
</script>

<template>
  <div :style="inlineStyle" :class="['flex-row', justifyClassName, alignClassName, rootClassName]">
    <slot></slot>
  </div>
</template>
