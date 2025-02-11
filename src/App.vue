<script setup lang="ts">
import { RouterView } from 'vue-router'
import FlexProvider from './components/UI/Flex/FlexProvider.vue'
import AppLayout from './components/View/AppLayout/AppLayout.vue'
</script>

<template>
  <FlexProvider>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </FlexProvider>
</template>
