<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import GridProvider from '@/components/UI/Grid/GridProvider.vue'
import type { MenuItems } from '@/components/UI/Layout/Menu/type.ts'
import type { TabsItems } from './components/UI/Tabs/type'
import type { TableColumns } from './components/UI/Table/type'
import useAlert from './components/UI/Alert/useAlert'
import useLayoutStore from './components/UI/Layout/LayoutStore'
import type { SelectOptions } from './components/Control/type'

const {
  Section,
  Image,
  Space,
  Switch,
  Button,
  Accordion,
  Breadcrumb,
  Card,
  Divider,
  Dropdown,
  InfoRow,
  NoteMessage,
  Pagination,
  Table,
  Tabs,
  Typography,
  Layout
} = UI

const { Title, Paragraph } = Typography

const {
  Form,
  Upload,
  Input,
  InputPassword,
  TextArea,
  Select,
  SelectTag,
  TreeSelect,
  DatePicker,
  CheckBox,
  Radio
} = Control

const { ImageUpload, FileUpload } = Upload

const { SingleImageUpload, MultipleImageUpload } = ImageUpload

const { Container, Head, Body, Side, Content, Menu } = Layout

const layout = useLayoutStore()

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

interface FormData {
  account: string
  password: string
  gender: string
  note: string
  birthday: Date | string
  role: string
  items: string[]
  tags: string[]
}

const initialValues: FormData = {
  account: '',
  password: '',
  gender: '',
  note: '',
  birthday: new Date(),
  role: '',
  items: [],
  tags: []
}

const options: SelectOptions = [
  {
    label: 'Item 1',
    value: '1',
    children: [
      { label: 'Item child 1', value: '11' },
      { label: 'Item child 2', value: '12' },
      { label: 'Item child 3', value: '13' },
      { label: 'Item child 4', value: '14' }
    ]
  },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' }
]

const handleSwitch = (switched: boolean) => {
  if (switched) layout.switchTheme('dark')
  else layout.switchTheme('light')
}
</script>

<template>
  <GridProvider>
    <Container color="green">
      <Head> </Head>
      <Body>
        <Side collapsable>
          <Menu type="vertical" :items="items" />
        </Side>
        <Content>
          <Section>
            <Switch @onSwitch="handleSwitch" />
            <Accordion lable="Accordion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magnam animi repellendus,
              eligendi aliquam explicabo facere blanditiis eos distinctio veritatis a cumque inventore beatae
              dolor vitae impedit provident officia nobis?
            </Accordion>
            <Breadcrumb
              :items="[
                { id: '1', label: 'Item 1' },
                { id: '2', label: 'Item 2' }
              ]"
            />
            <Card>
              <template #head>Head</template>
              <template #body>Body</template>
            </Card>
            <Divider> Divider </Divider>
            <Dropdown
              trigger="hover"
              :items="[
                { id: '1', comName: 'item-1' },
                { id: '2', comName: 'item-2' }
              ]"
            >
              <template #label>Dropdown</template>
              <template #item="com">
                <div v-if="com.item === 'item-1'">Item 1</div>
                <div v-if="com.item === 'item-2'">Item 2</div>
              </template>
            </Dropdown>
            <InfoRow>
              <template #label>Label</template>
              <template #text>Text</template>
            </InfoRow>
            <NoteMessage message="Message" type="error" />
            <Pagination ghost shape="square" hasContent />
            <Tabs
              :items="[
                { id: '1', label: 'Tab 1', comName: 'tab-1' },
                { id: '2', label: 'Tab 2', comName: 'tab-2' },
                { id: '3', label: 'Tab 3', comName: 'tab-3' }
              ]"
            >
              <template #content="com">
                <div v-if="com.tab === 'tab-1'">Content 1</div>
                <div v-if="com.tab === 'tab-2'">Content 2</div>
                <div v-if="com.tab === 'tab-3'">Content 3</div>
              </template>
            </Tabs>
            <Title variant="success">Title</Title>
            <Paragraph variant="danger">Paragraph</Paragraph>
            <Table hasRowSelection hasExpand :dataSource="dataSource" :columns="columns">
              <template #expand="com">
                <Table :dataSource="com.expand.data.child" :columns="columns" />
              </template>
            </Table>
            <!-- <Form :initialValues="initialValues" @onFinish="(data) => console.log(data)">
              <SingleImageUpload />
              <MultipleImageUpload />
              <FileUpload />
              <Input name="account">
                <template #label>Account</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </Input>
              <InputPassword name="password">
                <template #label>Password</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </InputPassword>
              <Select async name="gender" :options="options">
                <template #label>Gender</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </Select>
              <SelectTag name="tags" :options="options">
                <template #label>Tags</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </SelectTag>
              <TreeSelect name="tags" :options="options">
                <template #label>Tree tags</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </TreeSelect>
              <DatePicker name="birthday">
                <template #label>Birthday</template>
                <template #addonBefore>$</template>
                <template #addonAfter>%</template>
              </DatePicker>
              <TextArea name="note">
                <template #label>Note</template>
              </TextArea>
              <Space>
                <CheckBox value="1" name="items">Item 1</CheckBox>
                <CheckBox value="2" name="items">Item 2</CheckBox>
                <CheckBox value="3" name="items">Item 3</CheckBox>
              </Space>
              <Space>
                <Radio value="admin" name="role">Admin</Radio>
                <Radio value="user" name="role">User</Radio>
              </Space>
              <Button type="submit">Save</Button>
            </Form> -->
          </Section>
        </Content>
      </Body>
    </Container>

    <!-- <Section>
      <Table hasRowSelection hasExpand :dataSource="dataSource" :columns="columns">
        <template #expand="com">
          <Table :dataSource="com.expand.data.child" :columns="columns" />
        </template>
      </Table>
    </Section> -->
  </GridProvider>
</template>
