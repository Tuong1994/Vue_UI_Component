<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@/components/UI'
import { Select } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { ELang } from '@/common/enum'
import type { SelectOptions } from '@/components/Control/type'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const options = computed<SelectOptions>(() => [
  { label: t.lang.common.header.translate.en, value: ELang.EN },
  { label: t.lang.common.header.translate.vn, value: ELang.VN }
])

const handleSelect = (locale: ELang) => t.switchLang(locale)
</script>

<template>
  <Select
    :hasClear="false"
    :hasSearch="false"
    :defaultValue="t.locale"
    :options="options"
    @onChangeSelect="handleSelect"
  >
    <template #addonBefore>
      <Icon :iconName="iconName.GLOBE" />
    </template>
  </Select>
</template>
