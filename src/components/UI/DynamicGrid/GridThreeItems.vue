<script setup lang="ts">
import { defineProps } from 'vue'
import type { DynamicGridItems } from './type'

interface GridThreeItemsProps {
  items: DynamicGridItems
}

defineProps<GridThreeItemsProps>()
</script>

<template>
  <div className="grid-three-items">
    <div v-for="item in items" :key="item.id" className="item-content">
      <slot name="content" :comName="item.comName"></slot>
    </div>
  </div>
</template>
