<script setup lang="ts">
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <div class="list-empty">{{ t.lang.common.form.others.emptyOptions }}</div>
</template>
