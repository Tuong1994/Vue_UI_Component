<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Typography } from '@/components/UI'
import type { ItemChild } from './type'

const { Paragraph } = Typography

interface SideMenuItemProps {
  item: ItemChild;
}

defineProps<SideMenuItemProps>()
</script>

<template>
  <RouterLink :to="String(item.path)" class="group-item group-item-selected">
    <Paragraph :size="13">
      {{ item.label }}
    </Paragraph>
  </RouterLink>
</template>
