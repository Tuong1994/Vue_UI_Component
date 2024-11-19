<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { UI } from '@/components'
import type { ParagraphProps } from '../Typography/Paragraph.vue'
import type { FlexColProps } from '../Flex/Col.vue'
import type { FlexRowProps } from '../Flex/Row.vue'
import useLayoutStore from '../Layout/LayoutStore'

const { Flex, Typography } = UI

const { FlexRow, FlexCol } = Flex

const { Paragraph } = Typography

export interface InfoRowProps extends FlexRowProps {
  labelProps?: ParagraphProps
  textProps?: ParagraphProps
  labelSpanProps?: FlexColProps
  textSpanProps?: FlexColProps
  hasColon?: boolean
}

const props = withDefaults(defineProps<InfoRowProps>(), {})

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `info-row-${layout.theme}`)

const labelSpanDefaultProps = computed<FlexColProps>(() => ({
  span: 6,
  ...props.labelSpanProps
}))

const textSpanDefaultProps = computed<FlexColProps>(() => ({
  span: 16,
  ...props.textSpanProps
}))

const labelDefaultProps = computed<ParagraphProps>(() => ({
  rootClassName: 'row-label',
  ...props.labelProps
}))

const textDefaultProps = computed<ParagraphProps>(() => ({ strong: true, ...props.textProps }))
</script>

<template>
  <FlexRow v-bind="props" :rootClassName="`info-row ${themeClassName}`">
    <FlexCol v-bind="labelSpanDefaultProps">
      <Paragraph v-bind="labelDefaultProps">
        <slot name="label"></slot>
      </Paragraph>
    </FlexCol>
    <FlexCol v-bind="textSpanDefaultProps">
      <Paragraph v-bind="textDefaultProps">
        <slot name="text"></slot>
      </Paragraph>
    </FlexCol>
  </FlexRow>
</template>