<script setup lang="ts">
import * as yup from 'yup'
import { ref, computed, onMounted } from 'vue'
import { UI, Control } from './components'

const { Section, Button } = UI

const { Form, Input, InputPassword, Select, SelectTag, CheckBox } = Control

interface FormData {
  account: string
  password: string
  age: number
}

const initialValue: FormData = {
  account: '',
  password: '',
  age: -1,
  tags: []
}

const options = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 }
]
</script>

<template>
  <Section>
    <Form :initialValue="initialValue" @onFinish="(data) => console.log(data)">
      <Input name="account">
        <template #label>Account</template>
      </Input>

      <InputPassword name="password">
        <template #label>Password</template>
      </InputPassword>

      <Select name="age" :options="options">
        <template #label>Age</template>
      </Select>

      <SelectTag name="tags" :options="options">
        <template #label>Tags</template>
      </SelectTag>

      <Button type="submit">Vee</Button>
    </Form>
  </Section>
</template>
