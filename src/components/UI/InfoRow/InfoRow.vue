<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { UI } from '@/components'
import type { ParagraphProps } from '../Typography/Paragraph.vue'
import type { GridColProps } from '../Grid/Col.vue'
import type { GridRowProps } from '../Grid/Row.vue'
import useLayoutStore from '../Layout/LayoutStore'

const { Grid, Typography } = UI

const { Row, Col } = Grid

const { Paragraph } = Typography

export interface InfoRowProps extends GridRowProps {
  labelProps?: ParagraphProps
  textProps?: ParagraphProps
  labelSpanProps?: GridColProps
  textSpanProps?: GridColProps
  hasColon?: boolean
}

const props = withDefaults(defineProps<InfoRowProps>(), {})

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `info-row-${layout.theme}`)

const labelSpanDefaultProps = computed<GridColProps>(() => ({
  span: 6,
  ...props.labelSpanProps
}))

const textSpanDefaultProps = computed<GridColProps>(() => ({
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
  <Row v-bind="props" :rootClassName="`info-row ${themeClassName}`">
    <Col v-bind="labelSpanDefaultProps">
      <Paragraph v-bind="labelDefaultProps">
        <slot name="label"></slot>
      </Paragraph>
    </Col>
    <Col v-bind="textSpanDefaultProps">
      <Paragraph v-bind="textDefaultProps">
        <slot name="text"></slot>
      </Paragraph>
    </Col>
  </Row>
</template>
