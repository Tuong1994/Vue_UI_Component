<script setup lang="ts">
import { computed, withDefaults, useSlots, type StyleValue } from 'vue'
import useLayoutStore from '../Layout/LayoutStore'

export interface CardProps {
  rootClassName?: string
  rootStyle?: StyleValue
  headClassName?: string
  headStyle?: StyleValue
  bodyClassName?: string
  bodyStyle?: StyleValue
  hoverable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  rootClassName: '',
  headClassName: '',
  bodyClassName: ''
})

const slots = useSlots()

const layout = useLayoutStore()

const hasHead = computed<boolean>(() => slots.head !== undefined)

const hoverClassName = computed<string>(() => (props.hoverable ? 'card-hoverable' : ''))

const themeClassName = computed<string>(() => `card-${layout.theme}`)
</script>

<template>
  <div :style="rootStyle" :class="['card', hoverClassName, themeClassName, rootClassName]">
    <div v-if="hasHead" :style="headStyle" :class="['card-head', headStyle]">
      <slot name="head"></slot>
    </div>

    <div :style="bodyStyle" :class="['card-body', bodyClassName]">
      <slot name="body"></slot>
    </div>
  </div>
</template>
