<script setup lang="ts" generic="M extends object">
import { withDefaults, watchEffect, toRef } from 'vue'
import { Form, useForm } from 'vee-validate'
import type { ComponentSize } from '@/common/type.ts'
import type { ControlColor } from '@/components/Control/type.ts'
import useFormStore from './FormStore.ts'

export interface FormProps {
  initialValues: M
  color?: ControlColor
  sizes?: ComponentSize
}

const props = withDefaults(defineProps<FormProps>(), {
  color: 'blue',
  sizes: 'md'
})

const emits = defineEmits(['onFinish'])

const form = useFormStore()

const initialValues = toRef(props, 'initialValues')

const { handleSubmit } = useForm<M>({ initialValues })

const onSubmit = handleSubmit((data) => emits('onFinish', data))

watchEffect(() => {
  form.formActive()
  form.bindData(props.initialValues)
  form.changeColor(props.color)
  form.changeSize(props.sizes)
})
</script>

<template>
  <form @submit="onSubmit">
    <slot></slot>
  </form>
</template>
