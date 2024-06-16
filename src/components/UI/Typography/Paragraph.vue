<script setup lang="ts">
import { computed, withDefaults, toRefs, type StyleValue } from 'vue'
import type { TypoAligns, TypoVariant } from './type.ts'
import useLayoutStore from '../Layout/LayoutStore'

export interface ParagraphProps {
  rootClassName?: string
  rootStyle?: StyleValue
  weight?: number
  size?: number
  lineHeight?: number
  mark?: boolean
  italic?: boolean
  strong?: boolean
  underline?: boolean
  remove?: boolean
  variant?: TypoVariant
  aligns?: TypoAligns
}

const props = withDefaults(defineProps<ParagraphProps>(), {
  rootClassName: '',
  weight: 400,
  size: 14,
  lineHeight: 25,
  variant: 'default',
  aligns: 'left'
})

const layout = useLayoutStore()

const { rootStyle } = toRefs(props)

const alignsClassName = computed<string>(() => `paragraph-${props.aligns}`)

const variantClassName = computed<string>(() => `paragraph-${props.variant}`)

const underlineClassName = computed<string>(() => (props.underline ? 'paragraph-underline' : ''))

const removeClassName = computed<string>(() => (props.remove ? 'paragraph-remove' : ''))

const italicClassName = computed<string>(() => (props.italic ? 'paragraph-italic' : ''))

const strongClassName = computed<string>(() => (props.strong ? 'paragraph-strong' : ''))

const themeClassName = computed<string>(() => `paragraph-${layout.theme}`)

const inlineStyle = computed<StyleValue>(() => {
  const defaultStyle = {
    ...(rootStyle?.value as object),
    fontSize: `${props.size}px`,
    lineHeight: `${props.lineHeight}px`
  }
  if (props.strong) return defaultStyle
  return { ...defaultStyle, fontWeight: props.weight }
})
</script>

<template>
  <p
    :style="inlineStyle"
    :class="[
      'paragraph',
      alignsClassName,
      variantClassName,
      underlineClassName,
      removeClassName,
      italicClassName,
      strongClassName,
      themeClassName,
      rootClassName
    ]"
  >
    <slot v-if="!mark"></slot>
    <mark v-if="mark"><slot></slot></mark>
  </p>
</template>
