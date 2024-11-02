import { ref } from 'vue'
import { defineStore } from 'pinia'
import { iconName } from '@/components/UI/Icon/constant'
import type { AlertType, AlertIcon, AlertPlacement } from './type'

export type AlertOptions = {
  icons?: AlertIcon
  placement?: AlertPlacement
}

const useAlertStore = defineStore('alert', () => {
  const open = ref<boolean>(false)
  const message = ref<string>('')
  const type = ref<AlertType>('info')
  const options = ref<AlertOptions>({
    placement: 'top',
    icons: {
      successIconName: iconName.CIRCLE_CHECK,
      errorIconName: iconName.X_MARK_CIRCLE,
      warningIconName: iconName.CIRCLE_EXCLAMATION,
      infoIconName: iconName.CIRCLE_INFO
    }
  })
  const onOpen = (text: string, mode: AlertType) => {
    open.value = true
    message.value = text
    type.value = mode
  }
  const onClose = () => (open.value = false)
  const configOptions = (op: AlertOptions) => (options.value = { ...options.value, ...op })

  return { open, message, type, options, onOpen, onClose, configOptions }
})

export default useAlertStore
