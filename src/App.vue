<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import type { TabsItems } from '@/components/UI/Tabs/type.ts'

const { Section, Button, Tabs } = UI

const {
  Form,
  Input,
  InputPassword,
  Select,
  SelectTag,
  TreeSelect,
  DatePicker,
  TextArea,
  CheckBox,
  Radio,
  Upload
} = Control

const { Image, FileUpload } = Upload

const { SingleImageUpload, MultipleImageUpload } = Image

interface FormData {
  title: string
  remembered: boolean
  role: string[]
}

const initialValues = ref<FormData>({
  title: '',
  remembered: true,
  role: ['super-admin']
})

const options = [
  {
    label: 'Item 1',
    value: 1,
    children: [
      { label: 'Item Child 1', value: 101 },
      { label: 'Item Child 2', value: 102 },
      { label: 'Item Child 3', value: 103 },
      { label: 'Item Child 4', value: 104 },
      { label: 'Item Child 5', value: 105 }
    ]
  },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 6 },
  { label: 'Item 7', value: 7 },
  { label: 'Item 8', value: 8 },
  { label: 'Item 9', value: 9 },
  { label: 'Item 10', value: 10 },
  { label: 'Item 11', value: 11 },
  { label: 'Item 12', value: 12 }
]

const tabs: TabsItems = [
  { id: '1', label: 'Tab 1', comName: 'tab-1' },
  { id: '2', label: 'Tab 2', comName: 'tab-2' },
  { id: '3', label: 'Tab 3', comName: 'tab-3' },
  { id: '4', label: 'Tab 4', comName: 'tab-4' }
]
</script>

<template>
  <Section>
    <Tabs color="green" :items="tabs">
      <template #content="com">
        <div v-if="com.tab === 'tab-1'">Content 1</div>
        <div v-if="com.tab === 'tab-2'">Content 2</div>
        <div v-if="com.tab === 'tab-3'">Content 3</div>
        <div v-if="com.tab === 'tab-4'">Content 4</div>
      </template>
    </Tabs>

    <!-- <Form color="green" :initialValues="initialValues" @onFinish="(data) => console.log(data)">
      <TreeSelect name="title" :options="options">
        <template #label>Title</template>
      </TreeSelect>

      <CheckBox name="remembered">Remembered</CheckBox>

      <CheckBox name="role" value="super-admin"> Super Admin </CheckBox>
      <CheckBox name="role" value="admin"> Admin </CheckBox>
      <CheckBox name="role" value="user"> User </CheckBox>

      <Button type="submit">Vee</Button>
    </Form> -->
  </Section>
</template>
