<script setup lang="ts">
import { ref, computed, withDefaults, useSlots, watchEffect, toRefs, type StyleValue } from 'vue'
import { useField } from 'vee-validate'
import type { FormRule } from '@/components/Control/type.ts'
import type { ComponentSize, ComponentColor } from '@/common/type.ts'
import { iconName } from '@/components/UI/Icon/constant.ts'
import Icon from '@/components/UI/Icon/Icon.vue'
import NoteMessage from '@/components/UI/NoteMessage/NoteMessage.vue'
import useFormStore from '@/components/Control/Form/FormStore.ts'

export interface CheckBoxProps {
  rootClassName?: string
  labelClassName?: string
  controlClassName?: string
  rootStyle?: StyleValue
  labelStyle?: StyleValue
  controlStyle?: StyleValue
  sizes?: ComponentSize
  color?: ComponentColor
  value?: string | number
  name?: string
  checked?: boolean
  disabled?: boolean
  rule?: FormRule
}

const props = withDefaults(defineProps<CheckBoxProps>(), {
  rootClassName: '',
  labelClassName: '',
  controlClassName: '',
  sizes: 'md',
  color: 'blue',
  name: '',
  checked: false
})

const form = useFormStore()

const { name } = toRefs(props)

const {
  value: veeValue,
  checked: veeChecked,
  errorMessage,
  handleChange: veeOnChange
} = useField(name, !props.disabled ? props.rule : undefined, {
  type: 'checkbox',
  checkedValue: props.value
})

const slots = useSlots()

const emits = defineEmits(['onCheck', 'onInput', 'onBlur'])

const isCheck = ref<boolean>(false)

const hasLabel = computed<boolean>(() => slots.default !== undefined)

const sizeClassName = computed<string>(() => `checkbox-${props.sizes}`)

const colorClassName = computed<string>(() =>
  isCheck.value ? `checkbox-checked-${props.color}` : `checkbox-${props.color}`
)

const inputGapClassName = computed<string>(() => (form.isVee ? 'checkbox-gap' : ''))

const errorClassName = computed<string>(() => (errorMessage?.value ? 'checkbox-group-error' : ''))

const disabledClassName = computed<string>(() => (props.disabled ? 'checkbox-group-disabled' : ''))

const iconSize = computed<number>(() => {
  if (props.sizes === 'sm') return 12
  if (props.sizes === 'md') return 14
  if (props.sizes === 'lg') return 16
})

const controlValue = computed<string>(() => (form.isVee ? veeValue?.value : props.value))

const handleChange = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked
  const value = (e.target as HTMLInputElement).value
  isCheck.value = checked

  if (form.isVee) return veeOnChange(props.value)

  emits('onCheck', checked)
  if (checked) emits('onInput', value)
  else emits('onInput', '')
}

const handleBlur = (e: Event) => emits('onBlur', e)

watchEffect(() => (isCheck.value = props.checked))
</script>

<template>
  <div
    :style="rootStyle"
    :class="['checkbox', inputGapClassName, sizeClassName, colorClassName, rootClassName]"
  >
    <label :class="['checkbox-group', errorClassName, disabledClassName]">
      <input
        type="checkbox"
        class="group-control"
        :checked="checked"
        :value="controlValue"
        @input="handleChange"
        @blur="handleBlur"
      />

      <div class="group-checked">
        <Icon v-if="isCheck" :iconName="iconName.CHECK" :size="iconSize" />
      </div>

      <div v-if="hasLabel" class="group-label">
        <slot></slot>
      </div>
    </label>

    <NoteMessage v-if="errorMessage" type="error" :message="errorMessage" />
  </div>
</template>
