<script setup lang="ts">
import * as yup from 'yup'
import { ref } from 'vue'
import { UI, Control } from '@/components'
import type { TableColumns, TableRowKey } from '@/components/UI/Table/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import { iconName } from '@/components/UI/Icon/constant'
import { ELayoutTheme } from '@/components/UI/Layout/enum'

const { Section, Button, Image, Table, Divider, Tabs, Grid, Layout } = UI

const { Container, Content } = Layout

const {
  Form,
  Input,
  InputPassword,
  InputPhone,
  InputNumber,
  TextArea,
  Select,
  SelectTag,
  TreeSelect,
  DatePicker,
  CheckBox,
  Radio,
  Upload
} = Control

const { FileUpload, ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

interface Data {
  email: string
  password: string
  phone: string
  note: string
  gender: string
  role: number
  point: number
  tags: string | number[]
  birthday: Date
}

interface TableData {
  id: string
  content: string
  productName: string
  child: TableData[]
}

const initialValues: Data = {
  email: '',
  password: '',
  phone: '',
  note: '',
  role: -1,
  gender: '',
  tags: [],
  point: 0,
  birthday: new Date()
}

const layout = useLayoutStore()

const inputValue = ref<any>('')

const dataSource: TableData[] = [
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

const columns: TableColumns<TableData> = [
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

const tabItems = [
  { id: 'item-1', label: 'Item 1', comName: 'item-1', labelIcon: iconName.USER },
  { id: 'item-2', label: 'Item 2', comName: 'item-2', labelIcon: iconName.USER },
  { id: 'item-3', label: 'Item 3', comName: 'item-3', labelIcon: iconName.USER }
]

</script>

<template>
  <Section>
    <!-- <Grid :xs="2" :lg="6" :span="8">
          <div v-for="item in 24">{{ item }}</div>
        </Grid> -->

    <!-- <Tabs :items="tabItems">
          <template #content="tab">
            <div v-if="tab.content.comName === 'item-1'">Content 1</div>
            <div v-if="tab.content.comName === 'item-2'">Content 2</div>
            <div v-if="tab.content.comName === 'item-3'">Content 3</div>
          </template>
        </Tabs>

        <Tabs type="vertical" :items="tabItems">
          <template #content="tab">
            <div v-if="tab.content.comName === 'item-1'">Content 1</div>
            <div v-if="tab.content.comName === 'item-2'">Content 2</div>
            <div v-if="tab.content.comName === 'item-3'">Content 3</div>
          </template>
        </Tabs> -->

    <!-- <Table
      hasRowSelection
      hasExpand
      hasPagination
      :paginationProps="{ hasContent: true }"
      :dataSource="dataSource"
      :columns="columns"
    >
      <template #expand="com">
        <Table :dataSource="com.expand.data.child" :columns="columns" />
      </template>
    </Table> -->

    <!-- <Form
      :initialValues="initialValues"
      :autoFocusValidation="false"
      @onFinish="(value: Data) => console.log({data: inputValue})"
    >
      <MultipleImageUpload />

      <FileUpload />
      <Input name="email">
        <template #label>Email</template>
      </Input>
      <InputPassword name="password">
        <template #label>Password</template>
      </InputPassword>
      <InputPhone name="phone">
        <template #label>Phone</template>
      </InputPhone>
      <Select
        name="role"
        :options="[
          { label: 'admin', value: 1 },
          { label: 'user', value: 2 }
        ]"
      >
        <template #label>Role</template>
      </Select>
      <SelectTag
        name="tags"
        :options="[
          { label: 'tag 1', value: 1 },
          { label: 'tag 2', value: 2 },
          { label: 'tag 3', value: 3 }
        ]"
      >
        <template #label>Tags</template>
      </SelectTag>
      <InputNumber name="point">
        <template #label>Point</template>
      </InputNumber>
      <DatePicker name="birthday">
        <template #label>Birthday</template>
      </DatePicker>
      <TextArea name="note">
        <template #label>Note</template>
      </TextArea>
      <CheckBox>Male</CheckBox>
      <Radio>Male</Radio>
      <Button type="submit">Submit</Button>
    </Form> -->
  </Section>
</template>
