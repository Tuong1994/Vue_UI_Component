import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ComponentSize } from '@/common/type'
import type { ControlColor, ControlShape } from '../type'

const useFormStore = defineStore('form', () => {
  const isVee = ref<boolean>(false)
  const autoFocusValidation = ref<boolean>(false)
  const formData = ref<any>({})
  const formColor = ref<ControlColor>('blue')
  const formSize = ref<ComponentSize>('md')
  const formShape = ref<ControlShape>('square')
  const formDisabled = ref<boolean>(false)

  const formActive = () => (isVee.value = true)
  const bindData = (data: any) => (formData.value = data)
  const changeSize = (size: ComponentSize) => (formSize.value = size)
  const changeColor = (color: ControlColor) => (formColor.value = color)
  const changeShape = (shape: ControlShape) => (formShape.value = shape)
  const disabledForm = (disabled: boolean) => (formDisabled.value = disabled)
  const disabledAutoFocus = (autoFocused: boolean) => (autoFocusValidation.value = autoFocused)

  return {
    isVee,
    formData,
    formColor,
    formSize,
    formShape,
    formDisabled,
    autoFocusValidation,
    formActive,
    bindData,
    changeColor,
    changeSize,
    changeShape,
    disabledForm,
    disabledAutoFocus
  }
})

export default useFormStore
