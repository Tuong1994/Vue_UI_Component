<script setup lang="ts">
import { withDefaults, toRef } from 'vue'
import { iconName } from '@/components/UI/Icon/constant.ts'
import type { UploadItems, UploadItem } from '@/components/Control/type.ts'
import Icon from '@/components/UI/Icon/Icon.vue'

interface UploadFilesProps {
  files: UploadItems
  disabled: boolean
}

const props = withDefaults(defineProps<UploadFilesProps>(), {
  files: () => []
})

const emits = defineEmits(['onRemove'])

const disabled = toRef(props, 'disabled')

const disabledClassName = disabled.value ? 'items-inner-disabled' : ''

const handleRemove = (file: UploadItem) => emits('onRemove', file)
</script>

<template>
  <div className="upload-items">
    <div v-for="item in files" :key="item.id" :class="['items-inner', disabledClassName]">
      <span>{{ item.file?.name }}</span>
      <Icon :iconName="iconName.TRASH" class="inner-icon" @click="() => handleRemove(item)" />
    </div>
  </div>
</template>
