<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'
import type { MenuItems } from '@/components/UI/Layout/Menu/type.ts'

const { Section, Layout } = UI

const { Form, Input, InputPassword, TextArea, Select, SelectTag, TreeSelect, DatePicker } = Control

interface FormData {
  account: string
  password: string
  gender: number
  tags: string[]
  birthday: Date | string
  note: string
}

const initialValues: FormData = {
  account: '',
  password: '',
  gender: -1,
  tags: [],
  birthday: new Date(),
  note: ''
}

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
    <Input shape="round" />
    <InputPassword shape="round" />
    <Select shape="round" />
    <SelectTag shape="round" />
    <DatePicker shape="round" />
    <TextArea shape="round" />

    <Form :initialValues="initialValues" color="green">
      <Input name="account">
        <template #label>Account</template>
      </Input>

      <InputPassword name="password">
        <template #label>Password</template>
      </InputPassword>

      <Select name="gender">
        <template #label>Gender</template>
      </Select>

      <SelectTag name="tags">
        <template #label>Tags</template>
      </SelectTag>

      <DatePicker name="birthday">
        <template #label>Birthday</template>
      </DatePicker>

      <TextArea name="note">
        <template #label>Note</template>
      </TextArea>
    </Form>
  </Section>
</template>
