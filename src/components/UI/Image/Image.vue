<script setup lang="ts">
import { ref, computed, withDefaults, watch, toRefs, watchEffect, onMounted, type StyleValue } from 'vue'
import type { ComponentSize } from '@/common/type.ts'
import ImageLoading from './ImageLoading.vue'
import ImageView from './ImageView.vue'
import vLazyload from './directive.ts'

type ImageSize = (ComponentSize & number) | any

export interface ImageProps {
  rootClassName?: string
  rootStyle?: StyleValue
  sizes?: ImageSize
  src?: string
  hasView?: boolean
  hasRemove?: boolean
}

const props = withDefaults(defineProps<ImageProps>(), {
  rootClassName: '',
  sizes: 'sm',
  src: 'https://cdn.hswstatic.com/gif/space-smell-2.jpg',
  hasView: false,
  hasRemove: false
})

const emits = defineEmits(['onRemove'])

const { src } = toRefs(props)

const view = ref<string>('')

const loading = ref<boolean>(true)

const imageSize = computed<StyleValue>(() => {
  if (typeof props.sizes === 'number') return { width: `${size}px`, height: `${size}px` }
  if (props.sizes === 'sm') return { width: '100px', height: '100px' }
  if (props.sizes === 'md') return { width: '200px', height: '200px' }
  if (props.sizes === 'lg') return { width: '300px', height: '300px' }
  return { width: size, height: size }
})

const inlineStyle = computed<StyleValue>(() => ({ ...props.rootStyle, imageSize }))

const handleLoad = () => (loading.value = false)

const handleRemove = () => emits('onRemove')
</script>

<template>
  <div id="image" :style="inlineStyle" :class="['image', rootClassName]">
    <ImageLoading v-if="loading" :imageSize="imageSize" />
    <ImageView
      :loading="loading"
      :imageSize="imageSize"
      :hasView="hasView"
      :hasRemove="hasRemove"
      :src="src"
      @onLoad="handleLoad"
      @onRemove="handleRemove"
    />
  </div>
</template>
