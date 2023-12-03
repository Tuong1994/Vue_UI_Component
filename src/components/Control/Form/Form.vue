<script setup lang="ts" generic="M extends object">
import { withDefaults, watchEffect, toRef } from 'vue'
import { Form, useForm } from 'vee-validate'
import type { ComponentColor, ComponentSize } from '@/common/type.ts'
import useFormStore from './FormStore.ts'

export interface FormProps {
  initialValue: M
  color?: ComponentColor
  sizes?: ComponentSize
}

const props = withDefaults(defineProps<FormProps>(), {
  color: 'blue',
  sizes: 'md'
})

const emits = defineEmits(['onFinish'])

const form = useFormStore()

const initialValue = toRef(props, 'initialValue')

const { handleSubmit } = useForm<M>({ initialValue })

const onSubmit = handleSubmit((data) => emits('onFinish', data))

watchEffect(() => {
  form.formActive()
  form.bindData(props.initialValue)
  form.changeColor(props.color)
  form.changeSize(props.sizes)
})
</script>

<template>
  <form @submit="onSubmit">
    <slot></slot>
  </form>
</template>
