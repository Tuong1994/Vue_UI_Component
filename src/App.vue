<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import GridProvider from '@/components/UI/Grid/GridProvider.vue'
import type { MenuItems } from '@/components/UI/Layout/Menu/type.ts'
import type { TabsItems } from './components/UI/Tabs/type'
import type { TableColumns } from './components/UI/Table/type'

const { Section, Image, Table, Layout } = UI

// interface Data {
//   id: string
//   name: string
//   quantity: number
// }

// const dataSouce: Data[] = [
//   { id: '1', name: 'Product 1', quantity: 1 },
//   { id: '2', name: 'Product 2', quantity: 5 },
//   { id: '3', name: 'Product 3', quantity: 3 }
// ]

// const columns: TableColumns<Data> = [
//   {
//     id: 'image',
//     title: 'Image',
//     dataIndex: 'id',
//     component: () => ({
//       node: Image,
//       props: {
//         sizes: 50
//       }
//     })
//   },
//   {
//     id: 'name',
//     title: 'Name',
//     dataIndex: 'name'
//   },
//   {
//     id: 'name2',
//     title: 'Name',
//     dataIndex: 'name'
//   },
//   {
//     id: 'name3',
//     title: 'Name',
//     dataIndex: 'name'
//   },
//   {
//     id: 'quantity',
//     title: 'Quantity',
//     dataIndex: 'quantity'
//   },
//   {
//     id: 'action',
//     title: '',
//     dataIndex: 'id',
//     render: () => 'Delete'
//   }
// ]

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

interface Data {
  id: string
  content: string
  productName: string
  child: Data[]
}

const dataSource: Data[] = [
  {
    id: '1',
    content: 'This is a comment 1',
    productName: 'Product 1',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      },
      {
        id: 'child-3',
        content: 'This is a child comment 3',
        productName: 'Product 3',
        child: []
      }
    ]
  },
  {
    id: '2',
    content: 'This is a comment 2',
    productName: 'Product 2',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      }
    ]
  },
  {
    id: '3',
    content: 'This is a comment 3',
    productName: 'Product 3',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      }
    ]
  }
]

const columns: TableColumns<Data> = [
  {
    id: 'id',
    title: 'Image',
    dataIndex: 'id',
    component: () => ({
      node: Image,
      props: { imgWidth: 50, imgHeight: 50 }
    })
  },
  {
    id: 'content',
    title: 'Content',
    dataIndex: 'content'
  },
  {
    id: 'productName',
    title: 'Product name',
    dataIndex: 'productName'
  }
]
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
      <Table hasRowSelection hasExpand :dataSource="dataSource" :columns="columns">
        <template #expand="com">
          <Table :dataSource="com.expand.data.child" :columns="columns" />
        </template>
      </Table>
    </Section>
  </GridProvider>
</template>
