<script setup lang="ts">
import { withDefaults, defineProps, type StyleValue } from 'vue'
import type { DynamicGridItems } from './type'
import GridOneItem from './GridOneItem.vue'
import GridTwoItems from './GridTwoItems.vue'
import GridThreeItems from './GridThreeItems.vue'
import GridFourItems from './GridFourItems.vue'
import GridFiveItems from './GridFiveItems.vue'

interface DynamicGridProps {
  rootClassName?: string
  rootStyle?: StyleValue
  items: DynamicGridItems
}

withDefaults(defineProps<DynamicGridProps>(), {
  rootClassName: ''
})
</script>

<template>
  <div :class="['dynamic-grid', rootClassName]" :style="rootStyle">
    <GridOneItem v-if="items.length === 1" :items="items">
      <template #content="content">
        <slot name="content" :comName="content.comName"></slot>
      </template>
    </GridOneItem>

    <GridTwoItems v-if="items.length === 2" :items="items">
      <template #content="content">
        <slot name="content" :comName="content.comName"></slot>
      </template>
    </GridTwoItems>

    <GridThreeItems v-if="items.length === 3" :items="items">
      <template #content="content">
        <slot name="content" :comName="content.comName"></slot>
      </template>
    </GridThreeItems>

    <GridFourItems v-if="items.length === 4" :items="items">
      <template #content="content">
        <slot name="content" :comName="content.comName"></slot>
      </template>
    </GridFourItems>

    <GridFiveItems v-if="items.length >= 5" :items="items">
      <template #contentLeft="content">
        <slot name="contentLeft" :comName="content.comName" :items="content.items"></slot>
      </template>
      <template #contentRight="content">
        <slot name="contentRight" :comName="content.comName" :items="content.items"></slot>
      </template>
    </GridFiveItems>
  </div>
</template>
