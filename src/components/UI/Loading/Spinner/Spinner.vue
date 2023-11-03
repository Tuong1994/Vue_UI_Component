<script setup lang="ts">
import { computed, withDefaults, Styl } from 'vue'
import type { ComponentColor } from '@/common/type'
import { iconName } from '@/components/UI/Icon/constant.ts'
import Icon from '@/components/UI/Icon/Icon.vue'

export interface SpinnerProps {
  rootClassName?: string
  color?: ComponentColor
  size?: number
}

const props = withDefaults(defineProps<SpinnerProps>(), {
  rootClassName: '',
  size: 15,
  color: 'black'
})

const colorClassName = computed<string>(() => `spinner-${props.color}`)
</script>

<template>
  <Icon :size="size" :iconName="iconName.SPINNER" :rootClassName="['spinner', colorClassName]" />
</template>
