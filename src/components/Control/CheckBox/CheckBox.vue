<script setup lang="ts">
import { ref, computed, withDefaults, useSlots, watchEffect, toRefs, type StyleValue } from 'vue'
import { ComponentSize, ComponentColor } from '@/common/type.ts'
import { iconName } from '@/components/UI/Icon/constant.ts'
import Icon from '@/components/UI/Icon/Icon.vue'

export interface CheckBoxProps {
  rootClassName?: string
  labelClassName?: string
  controlClassName?: string
  rootStyle?: StyleValue
  labelStyle?: StyleValue
  controlStyle?: StyleValue
  sizes?: ComponentSize
  color?: ComponentColor
  checked?: boolean
}

const props = withDefaults(defineProps<CheckBoxProps>(), {
  rootClassName: '',
  labelClassName: '',
  controlClassName: '',
  sizes: 'md',
  color: 'blue',
  checked: false
})

const emits = defineEmits(['onCheck'])

const slots = useSlots()

const isCheck = ref<boolean>(false)

const hasLabel = computed<boolean>(() => slots.default !== undefined)

const sizeClassName = computed<string>(() => `checkbox-${props.sizes}`)

const colorClassName = computed<string>(() =>
  isCheck.value ? `checkbox-checked-${props.color}` : `checkbox-${props.color}`
)

const iconSize = computed<number>(() => {
  if (props.sizes === 'sm') return 12
  if (props.sizes === 'md') return 14
  if (props.sizes === 'lg') return 16
})

const handleCheck = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked
  isCheck.value = checked
  emits('onCheck', checked)
}

watchEffect(() => (isCheck.value = props.checked))
</script>

<template>
  <div :style="rootStyle" :class="['checkbox', sizeClassName, colorClassName, rootClassName]">
    <label class="checkbox-group">
      <input type="checkbox" class="group-control" @input="handleCheck" />

      <div class="group-checked">
        <Icon v-if="isCheck" :iconName="iconName.CHECK" :size="iconSize" />
      </div>

      <div v-if="hasLabel" class="group-label">
        <slot></slot>
      </div>
    </label>
  </div>
</template>
