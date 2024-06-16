<script setup lang="ts">
import { Divider, Image } from '@/components/UI'
import type { UploadItem, UploadItems } from '@/components/Control/type'

interface ViewAreaProps {
  title: string
  items: UploadItems
  disabled: boolean
}

defineProps<ViewAreaProps>()

const emits = defineEmits(['onRemove'])

const handleRemove = (item: UploadItem) => emits('onRemove', item)
</script>

<template>
  <div class="upload-view-area">
    <Divider>{{ title }}</Divider>

    <div class="area-images">
      <Image
        v-for="item in items"
        :key="item.id"
        :src="item.url"
        size="sm"
        objectFit="cover"
        :hasView="!disabled"
        :hasRemove="!disabled"
        @onRemove="() => handleRemove(item)"
      />
    </div>
  </div>
</template>
