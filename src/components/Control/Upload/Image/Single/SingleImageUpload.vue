<script setup lang="ts">
import { ref, computed, withDefaults, watchEffect, inject, type StyleValue } from 'vue'
import { ACCEPT_IMAGE_FILE_TYPE, DEFAULT_FILE_SIZE } from '../../constant.ts'
import { REPLACE_NUM_REGEX, REPLACE_TYPE_REGEX } from '@/common/constant/regex'
import type { UploadError, ControlColor, ControlShape } from '@/components/Control/type.ts'
import Image from '@/components/UI/Image/Image.vue'
import UploadControl from './UploadControl.vue'
import UploadLoading from './UploadLoading.vue'
import NoteMessage from '@/components/UI/NoteMessage/NoteMessage.vue'
import useLangStore from '@/stores/LangStore'

export interface SingleImageUploadProps {
  rootClassName?: string
  controlClassName?: string
  rootStyle?: StyleValue
  controlStyle?: StyleValue
  shape?: ControlShape
  color?: ControlColor
  limit?: number
  defaultImageUrl?: string
  fileAccepted?: string
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<SingleImageUploadProps>(), {
  rootClassName: '',
  controlClassName: '',
  shape: 'square',
  color: 'blue',
  limit: DEFAULT_FILE_SIZE,
  fileAccepted: ACCEPT_IMAGE_FILE_TYPE.join(',')
})

const emits = defineEmits(['onUpload'])

const t = useLangStore()

const form = inject('form', null) as any

const image = ref<File | null>(null)

const viewImage = ref<string>('')

const error = ref<UploadError | null>(null)

const dragged = ref<boolean>(false)

const uploading = ref<boolean>(props.loading)

const controlColor = computed<ControlColor>(() => (form?.isVee ? form?.formColor : props.color))

const controlShape = computed<ControlShape>(() => (form?.isVee ? form?.formShape : props.shape))

const controlDisabled = computed<boolean>(() => (form?.isVee ? form?.formDisabled : props.disabled))

const shapeClassName = computed<string>(() => `single-image-upload-${controlShape.value}`)

const colorClassName = computed<string>(() => `single-image-upload-${controlColor.value}`)

const gapClassName = computed<string>(() => (form?.isVee ? 'single-image-upload-gap' : ''))

const disabledClassName = computed<string>(() => (controlDisabled.value ? 'upload-group-disabled' : ''))

const errorClassName = computed<string>(() => (error.value?.active ? 'upload-group-error' : ''))

const dragClassName = computed<string>(() => (dragged.value ? 'upload-group-dragged' : ''))

const errorMessage = computed<string | undefined>(() => {
  if (!error.value) return ''
  if (error.value.type === 'fileSize')
    return t.lang.common.form.others.fileSize.replace(REPLACE_NUM_REGEX, `${props.limit / (1024 * 1024)}`)
  if (error.value.type === 'fileType') {
    const types = props.fileAccepted.split(',').map((type) => type.replace('image/', ''))
    return t.lang.common.form.others.fileType.replace(REPLACE_TYPE_REGEX, `${types.join(', ')}`)
  }
})

const handleUpload = (imageFile: File) => {
  if (!props.fileAccepted.includes(imageFile.type)) return (error.value = { active: true, type: 'fileType' })
  if (imageFile.size > props.limit) return (error.value = { active: true, type: 'fileSize' })
  image.value = imageFile
  emits('onUpload', imageFile)
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const imageFile = target.files ? target.files[0] : null
  if (imageFile) handleUpload(imageFile)
}

const handleDrag = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  if (e.type === 'dragenter' || e.type === 'dragover') dragged.value = true
  else if (e.type === 'dragleave') dragged.value = false
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  dragged.value = false
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    const imageFile = e.dataTransfer.files[0]
    handleUpload(imageFile)
  }
}

const handleRemove = () => {
  const inputEl = document.getElementById('singleUpload') as HTMLInputElement
  if (image.value && inputEl && inputEl.files) {
    const fileTransfer = new DataTransfer()
    const uploadedImages: File[] = Array.from(inputEl.files)
    const filterImages: File[] = uploadedImages.filter((img) => img.name !== image.value?.name)

    filterImages.forEach((file) => {
      const remainImage = new File([file.name], file.name)
      fileTransfer.items.add(remainImage)
    })

    inputEl.files = fileTransfer.files
  }
  viewImage.value = ''
  image.value = null
  emits('onUpload', null)
}

// Set default image
watchEffect(() => {
  if (props.defaultImageUrl) viewImage.value = props.defaultImageUrl
})

// Generate view image
watchEffect(() => {
  if (!image.value) return
  const reader = new FileReader()
  reader.onloadstart = () => (uploading.value = true)
  reader.onloadend = () => {
    viewImage.value = reader.result as string
    uploading.value = false
  }
  reader.readAsDataURL(image.value)
  error.value = null
})
</script>

<template>
  <div
    :style="rootStyle"
    :class="['single-image-upload', gapClassName, shapeClassName, colorClassName, rootClassName]"
  >
    <div
      :class="['upload-group', errorClassName, dragClassName, disabledClassName]"
      @dragenter="handleDrag"
      @dragover="handleDrag"
      @dragleave="handleDrag"
      @drop="handleDrop"
    >
      <UploadLoading v-if="uploading" />

      <Image
        v-if="!uploading && viewImage"
        :src="viewImage"
        size="sm"
        objectFit="cover"
        hasView
        hasRemove
        @onRemove="handleRemove"
      />

      <UploadControl
        v-if="!uploading && !viewImage"
        id="singleUpload"
        :controlClassName="controlClassName"
        :controlStyle="controlStyle"
        :disabled="controlDisabled"
        :accept="fileAccepted"
        @onChange="handleChange"
      />
    </div>

    <NoteMessage v-if="error && error.active" type="error" :message="errorMessage" />
  </div>
</template>
