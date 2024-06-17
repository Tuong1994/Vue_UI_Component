<script setup lang="ts">
import * as yup from 'yup'
import { UI, Control } from '@/components'
import type { TableColumns, TableRowKey } from '@/components/UI/Table/type'

const { Section, Button, Image, Table } = UI

const { Form, Input, InputPassword, InputPhone, TextArea, Select, DatePicker, Upload } = Control

const { FileUpload, ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

interface Data {
  email: string
  password: string
  phone: string
  note: string
  role: number
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
  birthday: new Date()
}

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
</script>

<template>
  <Section>
    <Table
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
    </Table>

    <!-- <Form
      :initialValues="initialValues"
      :autoFocusValidation="false"
      @onFinish="(value) => console.log(value)"
    >
      <MultipleImageUpload />

      <FileUpload />
      <Input name="email" :rule="yup.string().required('This field is required')">
        <template #label>Email</template>
      </Input>
      <InputPassword name="password" :rule="yup.string().required('This field is required')">
        <template #label>Password</template>
      </InputPassword>
      <InputPhone name="phone" :rule="yup.string().required('This field is required')">
        <template #label>Phone</template>
      </InputPhone>
      <Select name="role" :rule="yup.number().min(1, 'This field is required')">
        <template #label>Role</template>
      </Select>
      <DatePicker name="birthday">
        <template #label>Birthday</template>
      </DatePicker>
      <TextArea name="note" :rule="yup.string().required('This field is required')">
        <template #label>Note</template>
      </TextArea>
      <Button type="submit">Submit</Button>
    </Form> -->
  </Section>
</template>
