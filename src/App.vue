<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'

const { Section, Button } = UI

const { Form, Input, InputPassword, Select, SelectTag, DatePicker, CheckBox, Radio } = Control

interface FormData {
  account: string
  password: string
  age: number
  birthday: Date | null
  role: string[]
  gender: string
}

const initialValue: FormData = {
  account: '',
  password: '',
  age: -1,
  birthday: null,
  gender: '',
  tags: [],
  role: ['user']
}

const options = [
  { label: 'Item 1', value: 1 },
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
</script>

<template>
  <Section>
    <Form color="purple" :initialValue="initialValue" @onFinish="(data) => console.log(data)">
      <Input name="account">
        <template #label>Account</template>
      </Input>

      <InputPassword name="password">
        <template #label>Password</template>
      </InputPassword>

      <SelectTag name="tags" :options="options">
        <template #label>Tags</template>
      </SelectTag>

      <Select name="age" :options="options">
        <template #label>Age</template>
      </Select>

      <DatePicker name="birthday" :rule="yup.date().nonNullable()">
        <template #label>Birthday</template>
      </DatePicker>

      <CheckBox name="role" value="user"> User </CheckBox>

      <CheckBox name="role" value="admin"> Admin </CheckBox>

      <Radio name="gender" value="male" :rule="yup.string().required()">Male</Radio>

      <Radio name="gender" value="female" :rule="yup.string().required()">Female</Radio>

      <Button type="submit">Vee</Button>
    </Form>
  </Section>
</template>
