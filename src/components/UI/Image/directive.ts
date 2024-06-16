import type { DirectiveBinding } from 'vue'

const vLazyload = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding) {
    const renderImage = () => {
      el.src = el.dataset.src ?? ''
    }

    const createIntersectionObserver = () => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            renderImage()
            observer.unobserve(el)
          }
        })
      })
      observer.observe(el)
    }

    if (binding.value === 'lazy') {
      if (window['IntersectionObserver']) createIntersectionObserver()
      else renderImage()
    } else renderImage()
  }
}

export default vLazyload
