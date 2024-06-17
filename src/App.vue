<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import useLangStore from './stores/LangStore'
import { ELang } from './common/enum'

const t = useLangStore()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <button @click="() => t.switchLang(ELang.EN)">En</button>
    <button @click="() => t.switchLang(ELang.VN)">Vn</button>
  </header>

  <RouterView />
</template>
