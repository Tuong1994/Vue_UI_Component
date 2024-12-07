<script setup lang="ts">
import { defineProps } from 'vue'
import type { DynamicGridItems } from './type'

interface GridOneItemProps {
  items: DynamicGridItems
}

defineProps<GridOneItemProps>()
</script>

<template>
  <div className="grid-one-item">
    <div v-for="item in items" :key="item.id" className="item-content">
        <slot name="content" :comName="item.comName"></slot>
    </div>
  </div>
</template>
