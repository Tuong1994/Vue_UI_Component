<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { DynamicGridItems } from './type'

interface GridFiveItemsProps {
  items: DynamicGridItems
}

const props = defineProps<GridFiveItemsProps>()

const itemsLeft = computed(() => [...props.items].slice(0, 2))

const itemsRight = computed(() => [...props.items].slice(2, 5))
</script>

<template>
  <div className="grid-five-items">
    <div class="items-group">
      <div v-for="item in itemsLeft" :key="item.id" className="item-content">
        <slot name="contentLeft" :comName="item.comName" :items="itemsLeft"></slot>
      </div>
    </div>
    <div class="items-group">
      <div v-for="(item, idx) in itemsRight" :key="item.id" className="item-content">
        <slot name="contentRight" :comName="item.comName" :items="itemsRight"></slot>
        <div v-if="idx === 2 && items.length > 5" className="content-layer">+ {{ items.length - 5 }}</div>
      </div>
    </div>
  </div>
</template>
