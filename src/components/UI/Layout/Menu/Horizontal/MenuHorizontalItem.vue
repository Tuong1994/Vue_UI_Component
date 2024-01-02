<script setup lang="ts">
import { computed, withDefaults, toRef, type StyleValue } from 'vue'
import type { MenuItem } from '../type.ts'
import { iconName } from '@/components/UI/Icon/constant.ts'
import Icon from '@/components/UI/Icon/Icon.vue'
import useRender from '@/hooks/useRender.ts'

interface MenuHorizontalItemProps {
  itemClassName?: string
  itemStyle?: StyleValue
  item: MenuItem
  activeIds: string[]
}

const props = withDefaults(defineProps<MenuHorizontalItemProps>(), {
  itemClassName: '',
  childClassName: ''
})

const emits = defineEmits(['onOpenMenu'])

const activeIds = toRef(props, 'activeIds')

const hasChild = computed<boolean>(() => Boolean(props.item.children && props.item.children.length > 0))

const actived = computed<boolean>(() => props.activeIds.findIndex((id) => id === props.item.id) > -1)

const labelActiveClassName = computed<string>(() => (actived.value ? 'item-label-active' : ''))

const dropDownActiveClassName = computed<string>(() => (actived.value ? 'item-dropdown-active' : ''))

const render = useRender(actived)

const handleOpenMenu = (id: string) => emits('onOpenMenu', id)
</script>

<!-- @mouseenter="() => handleOpenMenu(item.id)"
@mouseleave="() => handleOpenMenu(item.id)" -->
<template>
  <div
    :style="itemStyle"
    :class="['horizontal-item', itemClassName]"
  >
    <div :class="['item-label', labelActiveClassName]">
      <div class="label-content">
        <div v-if="item.labelIcon" class="content-icon">
          <Icon :iconName="item.labelIcon" />
        </div>

        <div v-if="item.type === 'text'" class="content-text">{{ item.label }}</div>
        <router-link v-if="item.type === 'link'" :to="item.path as string" class="content-text">
          {{ item.label }}
        </router-link>
      </div>

      <div v-if="hasChild && !item.isRoot" class="label-arrow">
        <Icon :iconName="iconName.ANGLE_RIGHT" />
      </div>
    </div>

    <div v-if="hasChild" :class="['item-dropdown', dropDownActiveClassName]">
      <MenuHorizontalItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :activeIds="activeIds"
        :itemClassName="itemClassName"
        @onOpenMenu="() => handleOpenMenu(child.id)"
      />
    </div>
  </div>
</template>
