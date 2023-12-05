import * as yup from 'yup'

export type FormRule = typeof yup

// Select
export type Option = {
  label: string
  value: string | number | boolean
  icon?: string
  children?: Option[]
}

export type SelectOptions = Option[]

// DatePicker
export type SelectDate = {
  fullDate: Date
  date: number
  day: number
  month: number
  year: number
  type: 'main' | 'sub'
}

// Upload
export type UploadError = {
  active: boolean
  type: 'fileType' | 'fileSize' | 'fileMax'
}

export type UploadItem = {
  id: string
  file?: File
  url?: string
}

export type UploadItems = UploadItem[]
