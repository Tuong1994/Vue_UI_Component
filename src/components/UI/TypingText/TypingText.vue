<script setup lang="ts">
import { ref, computed, withDefaults, defineProps, watchEffect, toRef, type StyleValue } from 'vue'
import { useViewPoint } from '@/hooks'
import type { TypingTextColor } from './type'
import useTypingInterval from './useTypingText'

export interface TypingTextProps {
  rootClassName?: string
  contentClassName?: string
  rootStyle?: StyleValue
  textList?: string[]
  textSize?: number
  textWeight?: number
  textColor?: TypingTextColor
}

const props = withDefaults(defineProps<TypingTextProps>(), {
  rootClassName: '',
  contentClassName: '',
  textSize: 50,
  textWeight: 500,
  textList: () => ['Typing Text']
})

const style = toRef(props, 'rootStyle')

const { isPhone, isTablet } = useViewPoint()

const typingText = useTypingInterval(props.textList)

const contentSize = ref({ textSize: props.textSize, height: props.textSize + 5 })

const colorClassName = computed<string>(() => (props.textColor ? `typing-text-${props.textColor}` : ''))

const rootStyle = computed<StyleValue>(() => ({
  ...(style?.value as object),
  height: contentSize.value.height
}))

const textStyle = computed<StyleValue>(() => ({
  fontSize: contentSize.value.textSize,
  fontWeight: props.textWeight
}))

watchEffect(() => {
  if (isTablet) return (contentSize.value = { ...contentSize.value, textSize: 35, height: 40 })
  if (isPhone) return (contentSize.value = { ...contentSize.value, textSize: 25, height: 30 })
})
</script>

<template>
  <div :style="rootStyle" :class="['typing-text', colorClassName, rootClassName]">
    <div :style="textStyle" :class="['typing-text-content', contentClassName]">
      {{ typingText }}
      <div className="content-line" />
    </div>
  </div>
</template>
