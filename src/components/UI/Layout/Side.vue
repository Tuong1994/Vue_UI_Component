<script setup lang="ts">
import { computed, withDefaults, watch, onMounted, inject, toRef, type StyleValue } from 'vue'
import { iconName } from '@/components/UI/Icon/constant.ts'
import { useOverflow, useRender } from '@/hooks'
import Icon from '@/components/UI/Icon/Icon.vue'
import Button from '@/components/UI/Button/Button.vue'
import useLayoutStore from './LayoutStore.ts'

export interface LayoutSideProps {
  rootClassName?: string
  rootStyle?: StyleValue
  collapsable?: boolean
  hasCollapseButton?: boolean
}

const props = withDefaults(defineProps<LayoutSideProps>(), {
  rootClassName: '',
  collapsable: false,
  hasCollapseButton: true
})

const ICON_SIZE = 20

const layout = useLayoutStore()

const shrinked = toRef(layout, 'shrinked')

const grid = inject('grid', null) as any

const emits = defineEmits(['onCollapse'])

const isResponsive = computed<boolean>(() => Boolean(grid?.isPhone || grid?.isTablet))

const showSide = computed<boolean>(() => layout.showSide)

const themeClassName = computed<string>(() => `side-${layout.theme}`)

const shrinkClassName = computed<string>(() => (layout.shrinked ? `side-shrinked` : ''))

const layoutClassName = computed<string>(() => (layout.isLayout ? 'side-layout' : ''))

const collapsableClassName = computed<string>(() => (props.collapsable ? 'side-collapsable' : ''))

const mobileShowClassName = computed<string>(() => (showSide.value ? 'side-show' : ''))

const mobileBtnMoveDownClassName = computed<string>(() => (layout.isLayout ? 'side-mobile-btn-top' : ''))

const backdropShowClassName = computed<string>(() => (showSide.value ? 'side-mobile-backdrop-active' : ''))

const render = useRender(showSide)

useOverflow(showSide)

onMounted(() => layout.onResizeContent())

watch(shrinked, (newValue) => emits('onCollapse', newValue))
</script>

<template>
  <aside
    :style="rootStyle"
    :class="[
      'side',
      shrinkClassName,
      layoutClassName,
      themeClassName,
      collapsableClassName,
      mobileShowClassName,
      rootClassName
    ]"
  >
    <div class="side-content">
      <slot></slot>
    </div>
    <div v-if="!isResponsive && collapsable" class="side-action">
      <Button :color="layout.color" class="action-btn" @click="layout.onShrinked">
        <Icon :iconName="iconName.ARROWS_LEFT_RIGHT_TO_LINE" :size="16" />
      </Button>
    </div>
  </aside>

  <div
    v-if="render && isResponsive"
    :class="`side-mobile-backdrop ${backdropShowClassName}`"
    @click="layout.onHideSide"
  >
    <button className="backdrop-close-btn">
      <Icon :iconName="iconName.X_MARK" :size="ICON_SIZE" />
    </button>
  </div>

  <Button
    v-if="isResponsive && hasCollapseButton"
    sizes="sm"
    :color="layout.color"
    :rootClassName="`side-mobile-btn ${mobileBtnMoveDownClassName}`"
    @click="layout.onShowSide"
  >
    <Icon :iconName="iconName.LIST" :size="12" />
  </Button>
</template>
