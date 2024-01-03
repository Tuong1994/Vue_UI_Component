<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import GridProvider from '@/components/UI/Grid/GridProvider.vue'
import type { MenuItems } from '@/components/UI/Layout/Menu/type.ts'
import type { TabsItems } from './components/UI/Tabs/type'
import type { TableColumns } from './components/UI/Table/type'
import useAlert from './components/UI/Alert/useAlert'

const { Section, Card, Loading, Grid, Layout } = UI

const { Skeleton } = Loading

const { Row, Col } = Grid

const { Container, Head, Body, Side, Content, Menu } = Layout

// interface Data {
//   id: string
//   content: string
//   productName: string
//   child: Data[]
// }

// const dataSource: Data[] = [
//   {
//     id: '1',
//     content: 'This is a comment 1',
//     productName: 'Product 1',
//     child: [
//       {
//         id: 'child-1',
//         content: 'This is a child comment 1',
//         productName: 'Product 1',
//         child: []
//       },
//       {
//         id: 'child-2',
//         content: 'This is a child comment 2',
//         productName: 'Product 2',
//         child: []
//       },
//       {
//         id: 'child-3',
//         content: 'This is a child comment 3',
//         productName: 'Product 3',
//         child: []
//       }
//     ]
//   },
//   {
//     id: '2',
//     content: 'This is a comment 2',
//     productName: 'Product 2',
//     child: [
//       {
//         id: 'child-1',
//         content: 'This is a child comment 1',
//         productName: 'Product 1',
//         child: []
//       },
//       {
//         id: 'child-2',
//         content: 'This is a child comment 2',
//         productName: 'Product 2',
//         child: []
//       }
//     ]
//   },
//   {
//     id: '3',
//     content: 'This is a comment 3',
//     productName: 'Product 3',
//     child: [
//       {
//         id: 'child-1',
//         content: 'This is a child comment 1',
//         productName: 'Product 1',
//         child: []
//       }
//     ]
//   }
// ]

// const columns: TableColumns<Data> = [
//   {
//     id: 'id',
//     title: 'Image',
//     dataIndex: 'id',
//     component: () => ({
//       node: Image,
//       props: { imgWidth: 50, imgHeight: 50 }
//     })
//   },
//   {
//     id: 'content',
//     title: 'Content',
//     dataIndex: 'content'
//   },
//   {
//     id: 'productName',
//     title: 'Product name',
//     dataIndex: 'productName'
//   }
// ]

const items = computed<MenuItems>(() => [
  {
    id: '1',
    label: 'Item 1',
    labelIcon: 'user',
    type: 'text',
    isRoot: true,
    children: [
      {
        id: 'child-1',
        label: 'Item Child 1',
        labelIcon: 'user',
        type: 'text',
        children: [
          {
            id: 'child-inner-1',
            label: 'Item child inner 1',
            labelIcon: 'user',
            type: 'text'
          },
          {
            id: 'child-inner-2',
            label: 'Item child inner 2',
            labelIcon: 'user',
            type: 'text'
          }
        ]
      },
      {
        id: 'child-2',
        label: 'Item Child 2',
        labelIcon: 'user',
        type: 'text'
      },
      {
        id: 'child-3',
        label: 'Item Child 3',
        labelIcon: 'user',
        type: 'text',
        children: [
          {
            id: 'child-inner-1',
            label: 'Item child inner 1',
            labelIcon: 'user',
            type: 'text'
          }
        ]
      }
    ]
  },
  { id: '2', label: 'Item 2', labelIcon: 'user', type: 'text', isRoot: true, path: '#' },
  { id: '3', label: 'Item 3', labelIcon: 'user', type: 'text', isRoot: true, path: '#' },
  { id: '4', label: 'Item 4', labelIcon: 'user', type: 'text', isRoot: true, path: '#' }
])
</script>

<template>
  <GridProvider>
    <Section>
      <Row justify="between">
        <Col :span="8">
          <Card>
            <template #body>
              <Row>
                <Col :span="8"> <Skeleton type="image" /> </Col>
                <Col :span="16">
                  <Skeleton type="title" />
                  <Skeleton type="paragraph" />
                  <Skeleton type="button" />
                </Col>
              </Row>
            </template>
          </Card>
        </Col>
      </Row>
    </Section>
    <!-- <Menu :items="items" /> -->

    <!-- <Container color="green">
      <Head> </Head>
      <Body>
        <Side>
          <Menu type="vertical" :items="items" />
        </Side>
        <Content>
          <Section> </Section>
        </Content>
      </Body>
    </Container> -->

    <!-- <Section>
      <Table hasRowSelection hasExpand :dataSource="dataSource" :columns="columns">
        <template #expand="com">
          <Table :dataSource="com.expand.data.child" :columns="columns" />
        </template>
      </Table>
    </Section> -->
  </GridProvider>
</template>
