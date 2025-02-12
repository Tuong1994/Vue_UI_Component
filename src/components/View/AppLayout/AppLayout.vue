<script setup lang="ts">
import { Layout } from '@/components/UI'
import Header from '../Header/Header.vue';
import SideMenu from '../SideMenu/SideMenu.vue';

const { Container, Body, Side, Content } = Layout
</script>

<template>
  <Container>
   <Header />
    <Body>
      <Side> 
        <SideMenu />
      </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
