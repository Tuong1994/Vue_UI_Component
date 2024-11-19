<script setup lang="ts">
import { ref, computed, withDefaults, watchEffect, toRefs, inject, type StyleValue } from 'vue'
import type { ColSpan } from './type.ts'

export interface FlexColProps {
  rootClassName?: string
  rootStyle?: StyleValue
  isFill?: boolean
  span?: ColSpan
  xs?: ColSpan
  md?: ColSpan
  lg?: ColSpan
}

const props = withDefaults(defineProps<FlexColProps>(), {
  rootClassName: ''
})

const { rootStyle } = toRefs(props)

const flex = inject('flex', null) as any

const width = ref<string>('auto')

const hidden = ref<boolean>(false)

const fillClassName = computed<string>(() => (props.isFill ? 'flex-col-fill' : ''))

const inlineStyle = computed<StyleValue>(() => ({ ...(rootStyle?.value as object), width: width.value }))

const gapSize = computed<number>(() => (!flex?.gutters.length ? 10 : (flex?.gutters[0] as number)))

const calculateWidth = (span: ColSpan) => `calc((100% / 24) * ${span} - ${gapSize.value}px)`

watchEffect(() => {
  if (hidden.value) hidden.value = false

  if (flex?.isDesktop) {
    if (props.span === undefined) return (width.value = 'auto')
    if (props.span === 0) return (hidden.value = true)
    if (props.span === 24) return (width.value = '100%')
    return (width.value = calculateWidth(props.span))
  }

  if (flex?.isPhone) {
    if (props.xs === undefined) return (width.value = 'auto')
    if (props.xs === 0) return (hidden.value = true)
    if (props.xs !== 24) return (width.value = calculateWidth(props.xs))
  }

  if (flex?.isTablet) {
    if (props.md === undefined) return (width.value = 'auto')
    if (props.md === 0) return (hidden.value = true)
    if (props.md !== 24) return (width.value = calculateWidth(props.md))
  }

  if (flex?.isLaptop) {
    if (props.lg === undefined) return (width.value = 'auto')
    if (props.lg === 0) return (hidden.value = true)
    if (props.lg !== 24) return (width.value = calculateWidth(props.lg))
  }

  if (props.xs === 24 || props.md === 24 || props.lg === 24) width.value = '100%'
})
</script>

<template>
  <div v-if="!hidden" :style="inlineStyle" :class="['flex-col', fillClassName, rootClassName]">
    <slot></slot>
  </div>
</template>
