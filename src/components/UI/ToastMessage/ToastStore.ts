import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ToastMessages, ToastMessage, ToastType } from './type'
import utils from '@/utils'

const useToastStore = defineStore('toast', () => {
  const toastMessages = ref<ToastMessages>([])
  const addToast = (type: ToastType, message: string) => {
    const newToast: ToastMessage = { id: utils.uuid(), type, message }
    toastMessages.value = [newToast, ...toastMessages.value]
  }
  const removeToast = (id: string) =>
    (toastMessages.value = [...toastMessages.value].filter((toast) => toast.id !== id))

  return { toastMessages, addToast, removeToast }
})

export default useToastStore
