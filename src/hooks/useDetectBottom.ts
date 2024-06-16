import { ref, watchEffect, type Ref } from 'vue'

const useDetectBottom = (nodeRef: Ref<HTMLElement | undefined>, distance = 250) => {
  const bottom = ref<boolean>(false)

  const nodeBottomDistance = ref<number>(0)

  const handleScroll = () => {
    if (typeof window === 'undefined') return
    if (!nodeRef.value) return
    nodeBottomDistance.value = nodeRef.value.getBoundingClientRect().bottom
    if (window.innerHeight - nodeBottomDistance.value < distance) bottom.value = true
    else bottom.value = false
  }

  watchEffect((onStop) => {
    window.addEventListener('scroll', handleScroll)
    onStop(() => window.removeEventListener('scroll', handleScroll))
  })

  return bottom
}

export default useDetectBottom
