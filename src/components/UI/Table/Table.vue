<script setup lang="ts" generic="M">
import { ref, computed, withDefaults, watchEffect, type StyleValue } from 'vue'
import type { TableColumns, TableRowKey, TableColor, TableExpand } from './type.ts'
import type { PaginationProps } from '../Pagination/Pagination.vue'
import TableHead from './TableHead.vue'
import TableBody from './TableBody.vue'
import TableEmpty from './TableEmpty.vue'
import TableLoading from './TableLoading.vue'
import TableFilter from './TableFilter.vue'
import Pagination from '../Pagination/Pagination.vue'
import useLayoutStore from '../Layout/LayoutStore'

export interface TableProps<M> {
  rootClassName?: string
  rootStyle?: StyleValue
  tableClassName?: string
  tableStyle?: StyleValue
  color?: TableColor
  dataSource: M[]
  columns: TableColumns<M>
  rowKey?: TableRowKey
  loading?: boolean
  hasRowSelection?: boolean
  hasExpand?: boolean
  hasPagination?: boolean
  hasFilter?: boolean
  expand?: TableExpand
  paginationProps?: PaginationProps
}

const props = withDefaults(defineProps<TableProps<M>>(), {
  rootClassName: '',
  tableClassName: '',
  color: 'blue',
  rowKey: '',
  hasRowSelection: false,
  hasExpand: false,
  hasPagination: false,
  hasFilter: false,
  dataSource: () => [],
  columns: () => []
})

const emits = defineEmits(['onRowSelect', 'onChangePage', 'onFilter', 'onCancelFilter'])

const layout = useLayoutStore()

const rowSelectedKeys = ref<TableRowKey[]>([])

const paginationDefaultProps = computed<PaginationProps>(() => ({
  color: props.color,
  rootClassName: 'table-pagination',
  showContent: true,
  shape: 'square',
  ...props.paginationProps
}))

const colorClassName = computed<string>(() => `table-${props.color}`)

const themeClassName = computed<string>(() => `table-${layout.theme}`)

const handleSelectAll = () => {
  if (rowSelectedKeys.value.length === props.dataSource.length) return (rowSelectedKeys.value = [])
  rowSelectedKeys.value = props.dataSource.map((data, idx) =>
    props.rowKey ? (data[props.rowKey as keyof M] as TableRowKey) : `row-${idx}`
  )
}

const handleSelectRow = (key: TableRowKey) => {
  if (rowSelectedKeys.value.indexOf(key) === -1) return rowSelectedKeys.value.push(key)
  rowSelectedKeys.value = rowSelectedKeys.value.filter((k) => k !== key)
}

const handleChangePage = (page: number) => emits('onChangePage', page)

const handleFilter = () => emits('onFilter')

const handleCancelFilter = () => emits('onCancelFilter')

const handleRowSelect = () => emits('onRowSelect', rowSelectedKeys.value)

const handleCancelSelect = () => (rowSelectedKeys.value = [])

watchEffect(() => emits('onRowSelect', rowSelectedKeys.value))
</script>

<template>
  <div :style="rootStyle" :class="['table', colorClassName, themeClassName, rootClassName]">
    <TableFilter
      v-if="hasFilter"
      :color="color"
      @onFilter="handleFilter"
      @onCancelFilter="handleCancelFilter"
    >
      <template #filter>
        <slot name="filter"></slot>
      </template>
    </TableFilter>
    <div class="table-content">
      <table :style="tableStyle" :class="tableClassName">
        <TableHead
          :dataSource="dataSource"
          :columns="columns"
          :hasExpand="hasExpand"
          :hasRowSelection="hasRowSelection"
          :rowSelectedKeys="rowSelectedKeys"
          @onSelectAll="handleSelectAll"
          @onRowSelect="handleRowSelect"
          @onCancelSelect="handleCancelSelect"
        >
          <template #headRemoveButton>
            <slot name="headRemoveButton"></slot>
          </template>
          <template #headCancelButton>
            <slot name="headCancelButton"></slot>
          </template>
        </TableHead>
        <TableBody
          v-if="dataSource.length > 0"
          :color="color"
          :dataSource="dataSource"
          :columns="columns"
          :rowKey="rowKey"
          :expand="expand"
          :hasExpand="hasExpand"
          :hasRowSelection="hasRowSelection"
          :rowSelectedKeys="rowSelectedKeys"
          @onSelectRow="(key) => handleSelectRow(key)"
        >
          <template #expand="data">
            <slot name="expand" :expand="data"></slot>
          </template>
        </TableBody>
      </table>
      <TableEmpty v-if="dataSource.length === 0" />
    </div>

    <TableLoading v-if="loading" />
  </div>
  <Pagination v-if="hasPagination" v-bind="paginationDefaultProps" @onChangePage="handleChangePage" />
</template>
