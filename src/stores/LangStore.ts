import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ELang } from '@/common/enum'
import type { Lang } from '@/common/type'
import en from '@/common/lang/en'
import vn from '@/common/lang/vn'

const useLangStore = defineStore('lang', () => {
  const locale = ref<ELang>(ELang.EN)
  const lang = ref<Lang>(en)
  const switchLang = (type: ELang) => {
    locale.value = type
    if (type === ELang.EN) lang.value = en
    else lang.value = vn
  }

  return {
    locale,
    lang,
    switchLang
  }
})

export default useLangStore
