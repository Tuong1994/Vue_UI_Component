<script setup lang="ts">
import { UI } from '@/components'
import type { TableColor } from './type'

const { Button, Space, Flex } = UI

const { FlexRow, FlexCol } = Flex

interface TableFilterProps {
  color: TableColor
}

defineProps<TableFilterProps>()

const emits = defineEmits(['onFilter', 'onCancelFilter'])

const handleFilter = () => emits('onFilter')

const handleCancelFilter = () => emits('onCancelFilter')
</script>

<template>
  <FlexRow rootClassName="table-fitler">
    <slot name="filter"></slot>
    <FlexCol>
      <Space>
        <Button sizes="sm" :color="color" @click="handleFilter"> Save </Button>
        <Button sizes="sm" ghost @click="handleCancelFilter"> Cancel </Button>
      </Space>
    </FlexCol>
  </FlexRow>
</template>
