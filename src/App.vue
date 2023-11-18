<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import { CarouselItems } from '@/components/UI/Carousel/type.ts'

const { Section, Button, Carousel } = UI

const { Gallery } = Carousel

const {} = Control

const open = ref<boolean>(false)

const items = computed<CarouselItems>(() => [
  { id: '1', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '2', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '3', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '4', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '5', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '6', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '7', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '8', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '9', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '10', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '11', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' },
  { id: '12', url: 'https://universe.nasa.gov/internal_resources/402/Carina%20Nebula.jpeg' }
])

const style = {
  width: '100%',
  height: '100%',
  background: 'gray',
  border: '05px solid #fff'
}
</script>

<template>
  <Section>
    
  </Section>
</template>
