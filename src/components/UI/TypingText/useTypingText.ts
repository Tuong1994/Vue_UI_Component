import { ref, watchEffect } from 'vue'

enum Phase {
  Typing,
  Pausing,
  Deleting
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 1000
const DELETING_MS = 50

const useTypingInterval = (textList: string[]) => {
  const typingText = ref<string>('')

  const selectedIndex = ref<number>(0)

  const phase = ref<any>(Phase.Typing)

  watchEffect((onStop) => {
    let intervalId: number | undefined

    const startTyping = () => {
      intervalId = window.setInterval(() => {
        const nextTypingText = textList[selectedIndex.value]?.slice(0, typingText.value.length + 1)
        if (nextTypingText === typingText.value) {
          phase.value = Phase.Pausing
          clearInterval(intervalId)
          startPausing()
        } else typingText.value = nextTypingText
      }, TYPING_INTERVAL)
    }

    const startDeleting = () => {
      intervalId = window.setInterval(() => {
        if (!typingText.value) {
          const nextIndex = (selectedIndex.value + 1) % textList.length
          selectedIndex.value = nextIndex
          phase.value = Phase.Typing
          clearInterval(intervalId)
          startTyping()
        } else {
          const nextRemaining = textList[selectedIndex.value]?.slice(0, typingText.value.length - 1)
          typingText.value = nextRemaining
        }
      }, DELETING_MS)
    }

    const startPausing = () => {
      intervalId = window.setTimeout(() => {
        phase.value = Phase.Deleting
        clearTimeout(intervalId)
        startDeleting()
      }, PAUSE_MS)
    }

    // Start the appropriate phase based on the current state
    if (phase.value === Phase.Typing) startTyping()
    else if (phase.value === Phase.Deleting) startDeleting()
    else startPausing()

    // Clean up the interval or timeout when the effect stops
    onStop(() => {
      clearInterval(intervalId)
      clearTimeout(intervalId)
    })
  })

  return typingText
}

export default useTypingInterval
