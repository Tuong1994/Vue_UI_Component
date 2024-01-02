<script setup lang="ts">
import { computed, withDefaults, inject } from 'vue'
import type { ControlShape } from '@/components/Control/type.ts'
import type { ComponentColor, ComponentSize } from '@/common/type'
import Spinner from '@/components/UI/Loading/Spinner.vue'

type ButtonType = 'submit' | 'button' | 'reset'

export interface ButtonProps {
  rootClassName?: string
  shape?: ControlShape
  sizes?: ComponentSize
  color?: Exclude<ComponentColor, 'white' | 'gray'>
  ghost?: boolean
  loading?: boolean
  disabled?: boolean
  text?: boolean
  type?: ButtonType
}

const props = withDefaults(defineProps<ButtonProps>(), {
  rootClassName: '',
  shape: 'square',
  sizes: 'md',
  type: 'button'
})

const form = inject('form', null) as any

const buttonShape = computed<ControlShape>(() => (form?.isVee ? form?.formShape : props.shape))

const buttonSize = computed<ComponentSize>(() => (form?.isVee ? form?.formSize : props.sizes))

const buttonColor = computed<ComponentColor>(() => (form?.isVee ? form?.formColor : props.color))

const buttonDisabled = computed<boolean>(() => props.disabled || props.loading)

const isLoading = computed<boolean>(() => props.loading && !props.text)

const sizeClassName = computed<string>(() => `button-${buttonSize.value}`)

const shapeClassName = computed<string>(() => `button-${buttonShape.value}`)

const textClassName = computed<string>(() => (props.text ? 'button-text' : ''))

const loadingClassName = computed<string>(() => (isLoading.value ? 'button-loading' : ''))

const disabledClassName = computed<string>(() => (props.disabled ? 'button-disabled' : ''))

const colorClassName = computed<string>(() => {
  if (props.text) return ''
  if (!props.ghost && !buttonColor.value) return ''
  if (props.ghost && !buttonColor.value) return 'button-ghost'
  if (!props.ghost && buttonColor.value) return `button-color button-${buttonColor.value}`
  if (props.ghost && buttonColor.value) return `button-ghost button-ghost-${buttonColor.value}`
  return ''
})
</script>

<template>
  <button
    :type="type"
    :disabled="buttonDisabled"
    :class="[
      'button',
      shapeClassName,
      sizeClassName,
      colorClassName,
      loadingClassName,
      textClassName,
      disabledClassName,
      rootClassName
    ]"
  >
    <span v-if="isLoading" class="button-loading-icon"><Spinner /></span>
    <span><slot></slot></span>
  </button>
</template>
