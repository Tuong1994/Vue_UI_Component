<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Layout } from '@/components/UI'

const { Container, Head, Body, Side, Content } = Layout
</script>

<template>
  <Container>
    <Head>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </Head>
    <Body>
      <Side collapsable> Side content </Side>
      <Content>
        <RouterView />
      </Content>
    </Body>
  </Container>
</template>
