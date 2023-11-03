<script setup lang="ts">
import { withDefaults } from 'vue'

export interface SectionProps {
  rootClassName?: string
}

withDefaults(defineProps<SectionProps>(), {
  rootClassName: ''
})
</script>

<template>
  <section :class="['section', rootClassName]">
    <slot></slot>
  </section>
</template>
