<script setup lang="ts">
import * as yup from 'yup'
import { UI, Control } from '@/components'

const { Section, Button } = UI

const { Form, Input, InputPassword, InputPhone, TextArea, Select } = Control

interface Data {
  email: string
  password: string
  phone: string
  note: string
  role: number
}

const initialValues: Data = {
  email: '',
  password: '',
  phone: '',
  note: '',
  role: -1
}
</script>

<template>
  <Section>
    <Form
      :initialValues="initialValues"
      :autoFocusValidation="false"
      @onFinish="(value) => console.log(value)"
    >
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
      <TextArea name="note" :rule="yup.string().required('This field is required')">
        <template #label>Note</template>
      </TextArea>
      <Button type="submit">Submit</Button>
    </Form>
  </Section>
</template>
