<script setup lang="ts">
import { ref, computed, withDefaults, type StyleValue } from 'vue'
import type { ComponentPlacement } from '@/common/type.ts'
import type { DropdownItems } from './type.ts'
import { useRender, useClickOutside } from '@/hooks'
import useLayoutStore from '../Layout/LayoutStore'

type TriggerType = 'hover' | 'click'

export interface DropdownProps {
  rootClassName?: string
  labelClassName?: string
  rootStyle?: StyleValue
  labelStyle?: StyleValue
  placement?: Exclude<ComponentPlacement, 'top' | 'bottom'>
  items?: DropdownItems
  trigger?: TriggerType
}

const props = withDefaults(defineProps<DropdownProps>(), {
  rootClassName: '',
  labelClassName: '',
  placement: 'left',
  trigger: 'click',
  items: () => []
})

const dropdown = ref<boolean>(false)

const dropdownRef = ref<HTMLDivElement>()

useClickOutside(dropdownRef, dropdown)

const render = useRender(dropdown)

const layout = useLayoutStore()

const placementClassName = computed<string>(() => `dropdown-${props.placement}`)

const activeClassName = computed<string>(() => (dropdown.value ? 'dropdown-list-active' : ''))

const themeClassName = computed<string>(() => `dropdown-${layout.theme}`)

const handleDropdown = () => (dropdown.value = !dropdown.value)
</script>

<template>
  <div
    ref="dropdownRef"
    :style="rootStyle"
    :class="['dropdown', placementClassName, themeClassName, rootClassName]"
    @click="trigger === 'click' && handleDropdown()"
    @mouseenter="trigger === 'hover' && handleDropdown()"
    @mouseleave="trigger === 'hover' && handleDropdown()"
  >
    <div :style="labelStyle" :class="['dropdown-label', labelClassName]">
      <slot name="label"></slot>
    </div>
    <div v-if="render" :class="['dropdown-list', activeClassName]">
      <div v-for="item in items" :key="item.id" class="list-item">
        <slot name="item" :item="item.comName"></slot>
      </div>
    </div>
  </div>
</template>
