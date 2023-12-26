<script lang="ts" setup>
import type { NavSectionTitle } from '@layouts/types'

defineProps<{
  item: NavSectionTitle
}>()
</script>

<template>
  <li class="nav-section-title">
    <div class="title-wrapper">
      <!-- eslint-disable vue/no-v-text-v-html-on-component -->
      <div class="d-flex">
        <span
          class="title-text yt-sidebar-heading-text"
          v-text="item.heading"
        />
        <VIcon :icon="item?.appendIcon" />
      </div>
      <!-- eslint-enable vue/no-v-text-v-html-on-component -->
    </div>
  </li>
</template>

<style lang="scss" scoped>
.yt-sidebar-heading-text {
  overflow: hidden;
  flex: 1;
  color: #0f0f0f;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
  white-space: nowrap;
}
</style>
