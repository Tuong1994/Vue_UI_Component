import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ComponentColor, ComponentSize } from '@/common/type'

const useFormStore = defineStore('form', () => {
  const isVee = ref<boolean>(false)
  const formData = ref<any>({})
  const formColor = ref<ComponentColor>('blue')
  const formSize = ref<ComponentSize>('md')

  const formActive = () => (isVee.value = true)
  const bindData = (data: any) => (formData.value = data)
  const changeColor = (color: ComponentColor) => (formColor.value = color)
  const changeSize = (size: ComponentSize) => (formSize.value = size)

  return { isVee, formData, formColor, formSize, formActive, bindData, changeColor, changeSize }
})

export default useFormStore
