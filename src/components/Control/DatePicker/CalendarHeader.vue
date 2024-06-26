<script setup lang="ts">
import { computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant.ts'
import { ELang } from '@/common/enum'
import { monthsEn, monthsVn } from './data'
import type { SelectOptions } from '../type'
import Icon from '@/components/UI/Icon/Icon.vue'
import HeaderSelect from './HeaderSelect.vue'
import useLangStore from '@/stores/LangStore'

interface CalendarHeaderProps {
  currentMonth: number
  currentYear: number
}

defineProps<CalendarHeaderProps>()

const emits = defineEmits(['onSwitchMonth', 'onSelectMonth', 'onSelectYear'])

const t = useLangStore()

const months = computed<string[]>(() => (t.locale === ELang.EN ? monthsEn : monthsVn))

const years = computed<number[]>(() => {
  let startYear = 1970
  const yearRange: number[] = []
  const currentYear = new Date().getFullYear()
  while (startYear <= currentYear) {
    yearRange.push(startYear++)
  }
  return yearRange
})

const monthOptions = computed<SelectOptions>(() =>
  months.value.map((month, idx) => ({ label: month, value: idx }))
)

const yearOptions = computed<SelectOptions>(() =>
  years.value.map((year) => ({ label: String(year), value: year }))
)

const handleSwitchMonth = (type: 'prev' | 'next') => emits('onSwitchMonth', type)

const handleSelectMonth = (month: number) => emits('onSelectMonth', month)

const handleSelectYear = (year: number) => emits('onSelectYear', year)
</script>

<template>
  <div class="calendar-header">
    <button type="button" class="header-action" @click="() => handleSwitchMonth('prev')">
      <Icon :iconName="iconName.ANGLE_LEFT" />
    </button>
    <div class="header-control">
      <HeaderSelect
        type="month"
        :currentOption="currentMonth"
        :options="monthOptions"
        @onSelect="(option) => handleSelectMonth(option.value as number)"
      />
      <HeaderSelect
        type="year"
        :currentOption="currentYear"
        :options="yearOptions"
        @onSelect="(option) => handleSelectYear(option.value as number)"
      />
    </div>
    <button type="button" class="header-action" @click="() => handleSwitchMonth('next')">
      <Icon :iconName="iconName.ANGLE_RIGHT" />
    </button>
  </div>
</template>
