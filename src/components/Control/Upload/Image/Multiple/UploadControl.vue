<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant.ts'
import type { StyleValue } from 'vue'
import Icon from '@/components/UI/Icon/Icon.vue'
import useLangStore from '@/stores/LangStore'

interface UploadControlProps {
  controlClassName?: string
  controlStyle?: StyleValue
  accept?: string
  disabled?: boolean
  hasLabel: boolean
}

defineProps<UploadControlProps>()

const emits = defineEmits(['onChange'])

const t = useLangStore()

const handleChange = (e: Event) => emits('onChange', e)
</script>

<template>
  <div :style="controlStyle" :class="['group-control', controlClassName]">
    <input
      type="file"
      multiple
      :accept="accept"
      :disabled="disabled"
      class="control-input"
      @input="handleChange"
    />

    <div v-if="!hasLabel" className="control-label">
      <Icon :iconName="iconName.CLOUD_UPLOAD" :size="30" class="label-icon" />
      <p>{{ t.lang.common.form.placeholder.imagesUpload }}</p>
    </div>

    <slot v-if="hasLabel" name="label"></slot>
  </div>
</template>
