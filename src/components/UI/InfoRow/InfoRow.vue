<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { UI } from '@/components'
import type { SpaceProps } from '../Space/Space.vue'
import type { ParagraphProps } from '../Typography/Paragraph.vue'

const { Space, Typography } = UI

const { Paragraph } = Typography

interface InfoRowProps extends SpaceProps {
  labelProps?: ParagraphProps
  textProps?: ParagraphProps
}

const props = withDefaults(defineProps<InfoRowProps>(), {
  size: 'lg'
})

const labelDefaultProps = computed<ParagraphProps>(() => ({
  ...props.labelProps,
  rootClassName: 'row-label'
}))

const textDefaultProps = computed<ParagraphProps>(() => ({ ...props.textProps, strong: true }))
</script>

<template>
  <Space v-bind="props" :size="size" rootClassName="info-row">
    <Paragraph v-bind="labelDefaultProps">
      <slot name="label"></slot>
    </Paragraph>
    <Paragraph v-bind="textDefaultProps">
      <slot name="text"></slot>
    </Paragraph>
  </Space>
</template>
