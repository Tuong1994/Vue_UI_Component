import { computed, ref, watchEffect } from 'vue'

export const breakpoint = {
  SM_PHONE: 320,
  MD_PHONE: 480,
  LG_PHONE: 576,
  SM_TABLET: 667,
  MD_TABLET: 768,
  LG_TABLET: 992,
  LAPTOP: 1100
} as const

const useViewPoint = () => {
  const { SM_PHONE, MD_PHONE, LG_PHONE, SM_TABLET, MD_TABLET, LG_TABLET, LAPTOP } = breakpoint

  const screenWidth = ref<number>(window.innerWidth)

  watchEffect((onStop) => {
    if (typeof window === 'undefined') return
    const handleResize = () => (screenWidth.value = window.innerWidth)
    window.addEventListener('resize', handleResize)
    onStop(() => window.removeEventListener('resize', handleResize))
  })

  const isSmPhone = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value < MD_PHONE)

  const isPhone = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= MD_PHONE)

  const isLgPhone = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_PHONE)

  const isSmTablet = computed<boolean>(() => screenWidth.value > LG_PHONE && screenWidth.value <= SM_TABLET)

  const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= MD_TABLET)

  const isLgTablet = computed<boolean>(() => screenWidth.value > MD_TABLET && screenWidth.value <= LG_TABLET)

  const isLaptop = computed<boolean>(() => screenWidth.value > MD_TABLET && screenWidth.value <= LAPTOP)

  const isDesktop = computed<boolean>(() => screenWidth.value > LAPTOP)

  return { screenWidth, isSmPhone, isPhone, isLgPhone, isSmTablet, isTablet, isLgTablet, isLaptop, isDesktop }
}

export default useViewPoint
