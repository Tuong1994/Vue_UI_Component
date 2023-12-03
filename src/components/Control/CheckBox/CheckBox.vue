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
  setValue,
  handleChange: veeOnChange
} = useField(name, !props.disabled ? props.rule : undefined, {
  type: 'checkbox',
  checkedValue: props.value
})

const slots = useSlots()

const emits = defineEmits(['onCheck', 'onInput', 'onBlur'])

const isCheck = ref<boolean>(false)

const hasLabel = computed<boolean>(() => slots.default !== undefined)

const controlValue = computed<string>(() => (form.isVee ? veeValue?.value : props.value))

const controlColor = computed<ComponentColor>(() => (form.isVee ? form.formColor : props.color))

const controlSize = computed<ComponentSize>(() => (form.isVee ? form.formSize : props.sizes))

const controlCheck = computed<boolean>(() => (form.isVee ? veeChecked?.value : isCheck.value))

const sizeClassName = computed<string>(() => `checkbox-${controlSize.value}`)

const colorClassName = computed<string>(() =>
  controlCheck.value ? `checkbox-checked-${controlColor.value}` : `checkbox-${controlColor.value}`
)

const gapClassName = computed<string>(() => (form.isVee ? `checkbox-gap-${controlSize.value}` : ''))

const errorClassName = computed<string>(() => (errorMessage?.value ? 'checkbox-group-error' : ''))

const disabledClassName = computed<string>(() => (props.disabled ? 'checkbox-group-disabled' : ''))

const iconSize = computed<number>(() => {
  if (controlSize.value === 'sm') return 12
  if (controlSize.value === 'lg') return 16
  return 14
})

const handleChange = (e: Event) => {
  if (form.isVee) return veeOnChange(props.value)

  const checked = (e.target as HTMLInputElement).checked
  const value = (e.target as HTMLInputElement).value
  isCheck.value = checked

  emits('onCheck', checked)
  if (checked) emits('onInput', value)
  else emits('onInput', '')
}

const handleBlur = (e: Event) => emits('onBlur', e)

watchEffect(() => {
  if (!form.isVee) return (isCheck.value = props.checked)
  // if (veeValue && typeof veeValue === 'boolean') isCheck.value = veeValue.value
  // else isCheck.value = [...Array.from(veeValue)].includes(props.value)
})
</script>

<template>
  <div
    :style="rootStyle"
    :class="['checkbox', gapClassName, sizeClassName, colorClassName, rootClassName]"
  >
    <label :class="['checkbox-group', errorClassName, disabledClassName]">
      <input
        type="checkbox"
        class="group-control"
        :checked="isCheck"
        :disabled="disabled"
        :value="controlValue"
        @input="handleChange"
        @blur="handleBlur"
      />

      <div class="group-checked">
        <Icon v-if="controlCheck" :iconName="iconName.CHECK" :size="iconSize" />
      </div>

      <div v-if="hasLabel" class="group-label">
        <slot></slot>
      </div>
    </label>

    <NoteMessage v-if="errorMessage" type="error" :message="errorMessage" />
  </div>
</template>
