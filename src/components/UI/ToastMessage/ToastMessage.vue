<script setup lang="ts">
import { computed, withDefaults, type StyleValue } from 'vue'
import ToastItem from './ToastItem.vue'
import useToastStore from './ToastStore.ts'
import useRender from '@/hooks/useRender.ts'

export interface ToastMessageProps {
  rootClassName?: string
  rootStyle?: StyleValue
}

withDefaults(defineProps<ToastMessageProps>(), {
  rootClassName: ''
})

const toastStore = useToastStore()

const hasToast = computed<boolean>(() => toastStore.toastMessages.length > 0)

const render = useRender(hasToast)
</script>

<template>
  <Teleport to="#portal">
    <div v-if="render" :style="rootStyle" :class="['toast-message', rootClassName]">
      <ToastItem v-for="toast in toastStore.toastMessages" :key="toast.id" :toast="toast" />
    </div>
  </Teleport>
</template>
