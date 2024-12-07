<script setup lang="ts">
import { defineProps } from 'vue'
import type { DynamicGridItems } from './type'

interface GridTwoItemsProps {
  items: DynamicGridItems
}

defineProps<GridTwoItemsProps>()
</script>

<template>
  <div className="grid-two-items">
    <div v-for="item in items" :key="item.id" className="item-content">
        <slot name="content" :comName="item.comName"></slot>
    </div>
  </div>
</template>
