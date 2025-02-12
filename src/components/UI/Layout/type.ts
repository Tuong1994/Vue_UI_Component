import type { ComponentColor } from '@/common/type'
import type { ELayoutTheme } from './enum'

export type LayoutTheme = ELayoutTheme.DARK | ELayoutTheme.LIGHT

export type LayoutColor = Exclude<ComponentColor, 'white' | 'gray'>
