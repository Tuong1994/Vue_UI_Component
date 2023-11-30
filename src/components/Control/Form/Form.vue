<script setup lang="ts" generic="M extends object">
import { watchEffect, toRef } from 'vue'
import { Form, useForm } from 'vee-validate'
import useFormStore from './FormStore.ts'

export interface FormProps {
  initialValue: M
}

const props = defineProps<FormProps>()

const emits = defineEmits(['onFinish'])

const form = useFormStore()

const initialValue = toRef(props, 'initialValue')

const { handleSubmit } = useForm<M>({ initialValue })

const onSubmit = handleSubmit((data) => emits('onFinish', data))

watchEffect(() => {
  form.formActive()
  form.bindData(props.initialValue)
})
</script>

<template>
  <form @submit="onSubmit">
    <slot></slot>
  </form>
</template>
