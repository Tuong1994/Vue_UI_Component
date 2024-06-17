<script setup lang="ts">
import { computed } from 'vue'
import { ELang } from '@/common/enum'
import { daysEn, daysVn } from './data'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const days = computed<string[]>(() => (t.locale === ELang.EN ? daysEn : daysVn))
</script>

<template>
  <div className="calendar-day">
    <div v-for="(day, idx) in days" :key="idx" class="day-item">
      {{ day }}
    </div>
  </div>
</template>
