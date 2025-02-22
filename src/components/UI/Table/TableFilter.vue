<script setup lang="ts">
import { UI } from '@/components'
import type { TableColor } from './type'
import useLangStore from '@/stores/LangStore';

const { Button, Space, Flex } = UI

const { FlexRow, FlexCol } = Flex

interface TableFilterProps {
  color: TableColor
}

defineProps<TableFilterProps>()

const emits = defineEmits(['onFilter', 'onCancelFilter'])

const t = useLangStore()

const handleFilter = () => emits('onFilter')

const handleCancelFilter = () => emits('onCancelFilter')
</script>

<template>
  <FlexRow rootClassName="table-filter">
    <slot name="filter"></slot>
    <FlexCol>
      <Space>
        <Button sizes="sm" :color="color" @click="handleFilter">
          {{ t.lang.common.actions.save }}
        </Button>
        <Button sizes="sm" ghost @click="handleCancelFilter">
          {{ t.lang.common.actions.cancel }}
        </Button>
      </Space>
    </FlexCol>
  </FlexRow>
</template>
