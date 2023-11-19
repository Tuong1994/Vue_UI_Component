<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import { CarouselItems } from '@/components/UI/Carousel/type.ts'
import useMessage from '@/components/UI/ToastMessage/useMessage.ts'

const { Section, Button, ToastMessage } = UI

const {} = Control

const open = ref<boolean>(false)

const messageApi = useMessage()
</script>

<template>
  <Section>
    <Button color="green" @click="() => messageApi.success('Success')">Success</Button>
    <Button color="red" @click="() => messageApi.error('Error')">Error</Button>
    <Button color="orange" @click="() => messageApi.warning('Warning')">Warning</Button>
    <Button color="blue" @click="() => messageApi.info('Info')">Info</Button>
    <ToastMessage />
  </Section>
</template>
