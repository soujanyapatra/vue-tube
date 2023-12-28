<script lang="ts" setup>

// Icons
import gamingIcon from '@/Icons/youtube/gaming.svg'
import historyIcon from '@/Icons/youtube/history.svg'
import homeIcon from '@/Icons/youtube/home.svg'
import learningIcon from '@/Icons/youtube/learning.svg'
import likeIcon from '@/Icons/youtube/like.svg'
import liveIcon from '@/Icons/youtube/live.svg'
import moviesIcon from '@/Icons/youtube/movies.svg'
import musicIcon from '@/Icons/youtube/music.svg'
import newsIcon from '@/Icons/youtube/news.svg'
import notificationIcon from '@/Icons/youtube/notification.svg'
import podcastIcon from '@/Icons/youtube/podcast.svg'
import shoppingIcon from '@/Icons/youtube/shopping.svg'
import shortIcon from '@/Icons/youtube/shorts.svg'
import sportsIcon from '@/Icons/youtube/sports.svg'
import startVideoIcon from '@/Icons/youtube/startVideo.svg'
import subScriptionIcon from '@/Icons/youtube/subscription.svg'
import trendingIcon from '@/Icons/youtube/trending.svg'
import watchLaterIcon from '@/Icons/youtube/watchLater.svg'

// Components
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

import UserProfile from '@/layouts/components/UserProfile.vue'

import { useVideoStore } from '@/store/videolist'

// Composable
const video = useVideoStore()

const { searchModelValue } = storeToRefs(video)
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div class="d-flex">
          <VTextField
            v-model="searchModelValue"
            placeholder="Search"
            class="yt-search-field mx-16"
          >
            <template #prepend-inner>
              <VIcon icon="mdi-magnify" />
            </template>
            <template #append-inner>
              <VBtn variant="text">
                <VIcon icon="mdi-magnify" />
              </VBtn>
            </template>
          </VTextField>
        </div>
        <IconBtn>
          <VIcon icon="mdi-microphone-settings" />
        </IconBtn>

        <VSpacer />

        <IconBtn class="mx-2">
          <VIcon :icon="startVideoIcon" />
        </IconBtn>

        <IconBtn class="me-2">
          <VIcon :icon="notificationIcon" />
        </IconBtn>

        <!-- <NavbarThemeSwitcher class="me-2" /> -->

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Home',
          icon: homeIcon,
          to: '/home',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Shorts',
          icon: shortIcon,
          to: '/shorts',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Subscription',
          icon: subScriptionIcon,
          to: '/subscription',
        }"
      />

      <VDivider />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'You',
          appendIcon: 'mdi-chevron-right',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'History',
          icon: historyIcon,
          to: '/history',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Watch later',
          icon: watchLaterIcon,
          to: '/watch-later',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Liked video',
          icon: likeIcon,
          to: '/liked',
        }"
      />
      <VDivider />

      <!-- 👉 User Interface -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Explore',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Trending',
          icon: trendingIcon,
          to: '/trending',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Shopping',
          icon: shoppingIcon,
          to: '/shopping',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Music',
          icon: musicIcon,
          to: '/music',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Movies',
          icon: moviesIcon,
          to: '/movies',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Live',
          icon: liveIcon,
          to: '/live',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Gaming',
          icon: gamingIcon,
          to: '/gaming',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'News',
          icon: newsIcon,
          to: '/news',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Sports',
          icon: sportsIcon,
          to: '/sports',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Learning',
          icon: learningIcon,
          to: '/learning',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Podcasts',
          icon: podcastIcon,
          to: '/podcasts',
        }"
      />
    </template>

    <template #after-vertical-nav-items>
      <!-- 👉 illustration -->
      <a
        href="https://themeselection.com/item/sneat-vuetify-vuejs-admin-template"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-left: 7px;"
      />
    </template>

    <!-- 👉 Pages -->
    <slot />
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
