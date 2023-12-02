<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'

const { Section, Button } = UI

const { Form, Input, InputPassword, Select, SelectTag, DatePicker, CheckBox } = Control

interface FormData {
  account: string
  password: string
  age: number
  birthday: Date | null
}

const initialValue: FormData = {
  account: '',
  password: '',
  age: -1,
  tags: [],
  birthday: null
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
    <!-- <Form :initialValue="initialValue" @onFinish="(data) => console.log(data)">
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

      <Button type="submit">Vee</Button>
    </Form> -->

    <DatePicker>
      <template #label>Birthday</template>
    </DatePicker>
  </Section>
</template>
