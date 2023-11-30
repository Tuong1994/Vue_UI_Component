import { ref } from 'vue'
import { defineStore } from 'pinia'

const useFormStore = defineStore('form', () => {
  const isVee = ref<boolean>(false)
  const formData = ref<any>({})

  const formActive = () => (isVee.value = true)
  const bindData = (data: any) => (formData.value = data)

  return { isVee, formData, formActive, bindData }
})

export default useFormStore
