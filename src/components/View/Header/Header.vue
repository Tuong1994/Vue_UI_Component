<script setup lang="ts">
import { Flex, Layout } from '@/components/UI'
import Logo from '../Logo/Logo.vue'
import HeaderMode from './HeaderMode.vue'
import HeaderTranslate from './HeaderTranslate.vue'

const { Head } = Layout

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <Head>
    <FlexRow justify="between" aligns="middle">
      <FlexCol>
        <Logo />
      </FlexCol>
      <FlexCol :span="6">
        <FlexRow>
          <FlexCol :span="10">
            <HeaderMode />
          </FlexCol>
          <FlexCol :span="14">
            <HeaderTranslate />
          </FlexCol>
        </FlexRow>
      </FlexCol>
    </FlexRow>
  </Head>
</template>
