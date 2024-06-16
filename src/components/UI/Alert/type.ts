import type { ComponentPlacement } from '@/common/type'

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export type AlertIcon = {
  successIconName?: string
  errorIconName?: string
  warningIconName?: string
  infoIconName?: string
}

export type AlertPlacement = Exclude<ComponentPlacement, 'left' | 'right'>
