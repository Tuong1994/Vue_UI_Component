<script setup lang="ts">
import { withDefaults, computed, toRefs, type StyleValue } from 'vue'
import type {
  SkeletonType,
  TitleSkeletonProps,
  ParagraphSkeletonProps,
  ImageSkeletonProps,
  ButtonSkeletonProps,
  TitleOptions,
  ParagraphOptions,
  ImageOptions,
  ButtonOptions
} from './type'

interface CommonProps {
  type?: SkeletonType
  rootClassName?: string
  rootStyle?: StyleValue
}

type SkeletonProps = (
  | TitleSkeletonProps
  | ParagraphSkeletonProps
  | ImageSkeletonProps
  | ButtonSkeletonProps
) &
  CommonProps

const props = withDefaults(defineProps<SkeletonProps>(), {
  rootClassName: ''
})

const { rootStyle } = toRefs(props)

const titleOptions = computed<TitleOptions>(() => props.options as TitleOptions)

const paragraphOptions = computed<ParagraphOptions>(() => props.options as ParagraphOptions)

const imageOptions = computed<ImageOptions>(() => props.options as ImageOptions)

const buttonOptions = computed<ButtonOptions>(() => props.options as ButtonOptions)

const paragraphLines = computed<number>(() => paragraphOptions.value?.lines ?? 4)

const shapeClassName = computed<string>(() => `skeleton-${props.options?.shape ?? 'square'}`)

const inlineStyle = computed<StyleValue>(() => {
  const getWidthAndHeight = (size: string | number | undefined) => {
    if (!size) return
    return typeof size === 'number' ? `${size}px` : size
  }
  const style = { ...(rootStyle?.value as object) }
  switch (props.type) {
    case 'title': {
      const width = getWidthAndHeight(titleOptions.value?.width)
      const height = getWidthAndHeight(titleOptions.value?.height)
      return { ...style, width, height }
    }
    case 'button': {
      const width = getWidthAndHeight(buttonOptions.value?.width)
      const height = getWidthAndHeight(buttonOptions.value?.height)
      return { ...style, width, height }
    }
    case 'paragraph': {
      const width = getWidthAndHeight(paragraphOptions.value?.width)
      const height = getWidthAndHeight(paragraphOptions.value?.height)
      return { ...style, width, height }
    }
    case 'image': {
      if (imageOptions.value?.size) {
        const size = imageOptions.value?.size ?? 100
        return { ...rootStyle, width: `${size}px`, height: `${size}px` }
      }
      const width = getWidthAndHeight(imageOptions.value?.width)
      const height = getWidthAndHeight(imageOptions.value?.height)
      return { ...style, width, height }
    }
    default:
      return style
  }
})
</script>

<template>
  <div
    v-if="type === 'title'"
    :style="inlineStyle"
    :class="['skeleton', 'skeleton-title', shapeClassName, rootClassName]"
  ></div>
  <div
    v-if="type === 'image'"
    :style="inlineStyle"
    :class="['skeleton', 'skeleton-image', shapeClassName, rootClassName]"
  ></div>
  <div
    v-if="type === 'button'"
    :style="inlineStyle"
    :class="['skeleton', 'skeleton-button', shapeClassName, rootClassName]"
  ></div>

  <div v-if="type === 'paragraph'" :class="['skeleton-paragraph', rootClassName]">
    <div
      v-for="(_, idx) in paragraphLines"
      :key="idx"
      :style="inlineStyle"
      :class="['skeleton', 'skeleton-paragraph-line', shapeClassName]"
    ></div>
  </div>
</template>
