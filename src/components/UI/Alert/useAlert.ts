import { watchEffect } from 'vue'
import useAlertStore, { type AlertOptions } from './AlertStore'

const useAlert = (options?: AlertOptions) => {
  const alertStore = useAlertStore()

  watchEffect(() => {
    if (options) alertStore.configOptions(options)
  })

  const success = (message: string) => alertStore.onOpen(message, 'success')
  const error = (message: string) => alertStore.onOpen(message, 'error')
  const warning = (message: string) => alertStore.onOpen(message, 'warning')
  const info = (message: string) => alertStore.onOpen(message, 'info')

  const alertApi = { success, error, warning, info }

  return alertApi
}

export default useAlert
