<script setup lang="ts">
import { computed, withDefaults, type StyleValue, useSlots } from 'vue'
import type { ComponentPlacement } from '@/common/type.ts'

export interface TooltipProps {
  rootClassName?: string
  labelClassName?: string
  contentClassName?: string
  rootStyle?: StyleValue
  labelStyle?: StyleValue
  contentStyle?: StyleValue
  placement?: ComponentPlacement
}

const props = withDefaults(defineProps<TooltipProps>(), {
  rootClassName: '',
  labelClassName: '',
  contentClassName: '',
  placement: 'bottom'
})

const slots = useSlots()

const hasContent = computed<boolean>(() => slots.content !== undefined)

const placementClassName = computed<string>(() => `tooltip-${props.placement}`)
</script>

<template>
  <div :style="rootStyle" :class="['tooltip', placementClassName, rootClassName]">
    <div :style="labelStyle" :class="['tooltip-label', labelClassName]">
      <slot name="label"></slot>
      <span v-if="hasContent" class="label-arrow"></span>
    </div>
    <div v-if="hasContent" :style="contentStyle" :class="['tooltip-content', contentClassName]">
      <slot name="content"></slot>
    </div>
  </div>
</template>
