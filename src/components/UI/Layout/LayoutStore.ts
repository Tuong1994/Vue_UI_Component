import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ELayoutTheme } from './enum'
import type { LayoutColor, LayoutTheme } from './type'

const useLayoutStore = defineStore('layout', () => {
  const shrinked = ref<boolean>(false)
  const isLayout = ref<boolean>(false)
  const showSide = ref<boolean>(false)
  const resizeContent = ref<boolean>(false)
  const theme = ref<LayoutTheme>(ELayoutTheme.LIGHT)
  const color = ref<LayoutColor>('blue')

  const switchTheme = (type: LayoutTheme) => (theme.value = type)
  const switchColor = (type: LayoutColor) => (color.value = type)
  const onLayout = () => (isLayout.value = true)
  const onShrinked = () => (shrinked.value = !shrinked.value)
  const onResizeContent = () => (resizeContent.value = true)
  const onShowSide = () => (showSide.value = true)
  const onHideSide = () => (showSide.value = false)

  return {
    shrinked,
    isLayout,
    showSide,
    resizeContent,
    theme,
    color,
    switchTheme,
    switchColor,
    onLayout,
    onShrinked,
    onResizeContent,
    onShowSide,
    onHideSide
  }
})

export default useLayoutStore
