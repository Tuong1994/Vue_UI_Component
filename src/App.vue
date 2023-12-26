<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import GridProvider from '@/components/UI/Grid/GridProvider.vue'
import type { MenuItems } from '@/components/UI/Layout/Menu/type.ts'
import type { TabsItems } from './components/UI/Tabs/type'

const { Section, Tabs, Layout } = UI

// const { Container, Head, Body, Side, Content, Menu } = Layout

// const items = computed<MenuItems>(() => [
//   {
//     id: '1',
//     label: 'Item 1',
//     labelIcon: 'user',
//     type: 'text',
//     isRoot: true,
//     path: '#',
//     children: [
//       {
//         id: 'child-1',
//         label: 'Item Child 1',
//         labelIcon: 'user',
//         type: 'text',
//         isRoot: false,
//         path: '#',
//         children: [
//           {
//             id: 'child-inner-1',
//             label: 'Item child inner 1',
//             labelIcon: 'user',
//             type: 'text',
//             isRoot: false,
//             path: '#'
//           },
//           {
//             id: 'child-inner-2',
//             label: 'Item child inner 2',
//             labelIcon: 'user',
//             type: 'text',
//             isRoot: false,
//             path: '#'
//           }
//         ]
//       },
//       {
//         id: 'child-2',
//         label: 'Item Child 2',
//         labelIcon: 'user',
//         type: 'text',
//         isRoot: false,
//         path: '#'
//       },
//       {
//         id: 'child-3',
//         label: 'Item Child 3',
//         labelIcon: 'user',
//         type: 'text',
//         isRoot: false,
//         path: '#'
//       }
//     ]
//   }
//   // { id: '2', label: 'Item 2', labelIcon: 'user', type: 'text', isRoot: true, path: '#' },
//   // { id: '3', label: 'Item 3', labelIcon: 'user', type: 'text', isRoot: true, path: '#' },
//   // { id: '4', label: 'Item 4', labelIcon: 'user', type: 'text', isRoot: true, path: '#' }
// ])
</script>

<template>
  <GridProvider>
    <!-- <Container color="green">
    <Head>
      <Menu :items="items" />
    </Head>
    <Body>
      <Side>
        <Menu type="vertical" :items="items" />
      </Side>
      <Content>
        <Section></Section>
      </Content>
    </Body>
  </Container> -->
    <Section>
      <Tabs
        :items="[
          { id: '1', label: 'Tab 1', comName: 'tab-1' },
          { id: '2', label: 'Tab 2', comName: 'tab-2' }
        ]"
      >
        <template #content="com">
          <div v-if="com.tab === 'tab-1'">Content 1</div>
          <div v-if="com.tab === 'tab-2'">Content 2</div>
        </template>
      </Tabs>
    </Section>
  </GridProvider>
</template>
