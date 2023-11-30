<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import type { ComponentColor, ComponentSize } from '@/common/type'
import Spinner from '@/components/UI/Loading/Spinner.vue'

export interface ButtonProps {
  rootClassName?: string
  sizes?: ComponentSize
  color?: ComponentColor
  ghost?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  rootClassName: '',
  sizes: 'md',
  type: 'button'
})
const buttonDisabled = computed<boolean>(() => props.disabled || props.loading)

const sizeClassName = computed<string>(() => `button-${props.sizes}`)

const loadingClassName = computed<string>(() => (props.loading ? 'button-loading' : ''))

const disabledClassName = computed<string>(() => (props.disabled ? 'button-disabled' : ''))

const colorClassName = computed<string>(() => {
  if (!props.ghost && !props.color) return ''
  if (props.ghost && !props.color) return 'button-ghost'
  if (!props.ghost && props.color) return `button-color button-${props.color}`
  if (props.ghost && props.color) return `button-ghost button-ghost-${props.color}`
})
</script>

<template>
  <button
    :type="type"
    :disabled="buttonDisabled"
    :class="['button', sizeClassName, colorClassName, loadingClassName, disabledClassName, rootClassName]"
  >
    <span v-if="loading" class="button-loading-icon"><Spinner /></span>
    <span><slot></slot></span>
  </button>
</template>
