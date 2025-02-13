<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@/components/UI'
import { Select } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { ELayoutTheme } from '@/components/UI/Layout/enum'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const layout = useLayoutStore()

const options = computed<SelectOptions>(() => [
  { label: t.lang.common.header.mode.light, value: ELayoutTheme.LIGHT },
  { label: t.lang.common.header.mode.dark, value: ELayoutTheme.DARK }
])

const handleSelect = (theme: ELayoutTheme) => layout.switchTheme(theme)
</script>

<template>
  <Select
    :hasClear="false"
    :hasSearch="false"
    :options="options"
    :defaultValue="layout.theme"
    :color="layout.color as ControlColor"
    @onChangeSelect="handleSelect"
  >
    <template #addonBefore>
      <Icon v-if="layout.theme === ELayoutTheme.LIGHT" :iconName="iconName.LIGHTBULB" />
      <Icon v-if="layout.theme === ELayoutTheme.DARK" :iconName="iconName.MOON" />
    </template>
  </Select>
</template>
