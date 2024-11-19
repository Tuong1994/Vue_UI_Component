import { ref } from 'vue'
import { defineStore } from 'pinia'

const useFlexStore = defineStore('grid', () => {
  const gutters = ref<[number?, number?]>([])
  const isPhone = ref<boolean>(false)
  const isTablet = ref<boolean>(false)
  const isLaptop = ref<boolean>(false)
  const isDesktop = ref<boolean>(false)

  const addGutters = (rowGap: number, colGap?: number) => {
    if (rowGap && !colGap) return (gutters.value[0] = rowGap)
    gutters.value[0] = rowGap
    gutters.value[1] = colGap
  }
  const addViewPoint = (phone: boolean, tablet: boolean, laptop: boolean, desktop: boolean) => {
    isPhone.value = phone
    isTablet.value = tablet
    isLaptop.value = laptop
    isDesktop.value = desktop
  }

  return { gutters, isPhone, isTablet, isLaptop, isDesktop, addGutters, addViewPoint }
})

export default useFlexStore
