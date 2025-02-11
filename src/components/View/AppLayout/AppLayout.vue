<script setup lang="ts">
import { Layout } from '@/components/UI'
import Header from '../Header/Header.vue';

const { Container, Body, Side, Content } = Layout
</script>

<template>
  <Container>
   <Header />
    <Body>
      <Side collapsable> Side content </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
