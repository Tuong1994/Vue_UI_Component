<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Space, Image, Typography } from '@/components/UI'
import { routePaths } from '@/router'
import vueLogo from '/vue-logo.svg'

const { Paragraph } = Typography
</script>

<template>
  <RouterLink :to="routePaths.HOME" class="logo">
    <Space>
      <Image rootClassName="logo-image" :imgWidth="30" :src="vueLogo" />
      <Paragraph strong rootClassName="logo-name">Vue Components</Paragraph>
    </Space>
  </RouterLink>
</template>
