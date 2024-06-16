<script setup lang="ts" generic="M extends object">
import { withDefaults, watchEffect, toRef, provide } from 'vue'
import { Form, useForm } from 'vee-validate'
import type { ComponentSize } from '@/common/type.ts'
import type { ControlColor, ControlShape } from '@/components/Control/type.ts'
import useFormStore from './FormStore.ts'

export interface FormProps<M> {
  initialValues: M
  disabled?: boolean
  autoFocusValidation?: boolean
  color?: ControlColor
  sizes?: ComponentSize
  shape?: ControlShape
}

const props = withDefaults(defineProps<FormProps<M>>(), {
  color: 'blue',
  sizes: 'md',
  shape: 'square',
  autoFocusValidation: true
})

const emits = defineEmits(['onFinish'])

const form = useFormStore()

const initialValues = toRef(props, 'initialValues')

const { handleSubmit } = useForm<M>({ initialValues: initialValues.value })

const onSubmit = handleSubmit((data) => emits('onFinish', data))

if (form) {
  provide('form', form)

  watchEffect(() => {
    form.formActive()
    form.bindData(props.initialValues)
    form.changeColor(props.color)
    form.changeSize(props.sizes)
    form.changeShape(props.shape)
    form.disabledForm(props.disabled)
    form.disabledAutoFocus(props.autoFocusValidation)
  })
}
</script>

<template>
  <form @submit="onSubmit">
    <slot></slot>
  </form>
</template>
