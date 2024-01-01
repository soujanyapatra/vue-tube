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
// import shortIcon from '@/Icons/youtube/shorts.svg'
import sportsIcon from '@/Icons/youtube/sports.svg'
import startVideoIcon from '@/Icons/youtube/startVideo.svg'
import subScriptionIcon from '@/Icons/youtube/subscription.svg'
import trendingIcon from '@/Icons/youtube/trending.svg'
import watchLaterIcon from '@/Icons/youtube/watchLater.svg'
import youTubePremiumIcon from '@/Icons/youtube/ytPremium.svg'
import youTubeMusicIcon from '@/Icons/youtube/ytMusic.svg'
import youTubeKidsIcon from '@/Icons/youtube/ytKids.svg'
import youTubeSettingIcon from '@/Icons/youtube/ytSetting.svg'
import youTubeFlagIcon from '@/Icons/youtube/ytFlag.svg'
import youTubeHelpIcon from '@/Icons/youtube/ytHelp.svg'
import youTubeFeedBackIcon from '@/Icons/youtube/ytFeedBack.svg'

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
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VRow>
          <VCol 
            cols="12"
            lg="1"
            md="1"
            sm="1">
            <IconBtn
              class="ms-n3 d-lg-none"
              @click="toggleVerticalOverlayNavActive(true)"
            >
              <VIcon icon="bx-menu" />
            </IconBtn>
          </VCol>
          <VCol
            cols="12"
            lg="9"
            md="8"
            sm="7"
            class="d-flex justify-center"
          >
            <div class="d-flex yt-topbar__search-tag align-center">
              <VTextField
                v-model="searchModelValue"
                placeholder="Search"
                rounded
                class="yt-search-field my-input"
              >
                <!-- <template #prepend-inner>
                  <VIcon icon="mdi-magnify" />
                </template> -->
                <template #append-inner>
                  <VBtn variant="text" class="yt-topbar__append-inner-button">
                    <VIcon icon="mdi-magnify" />
                  </VBtn>
                </template>
              </VTextField>
              <VBtn size="x-small" variant="flat" class="mx-4 yt-topbar__button">
                <VIcon icon="mdi-microphone" />
              </VBtn>
            </div>
          </VCol>
          <VCol
            cols="12"
            lg="2"
            md="3"
            sm="4"
          >
            <IconBtn class="mx-2">
              <VIcon :icon="startVideoIcon" />
            </IconBtn>
            <IconBtn class="me-2">
              <VIcon :icon="notificationIcon" />
            </IconBtn>
            <NavbarThemeSwitcher class="me-2" />
            <UserProfile />
          </VCol>
        </VRow>
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
      <!-- <VerticalNavLink
        :item="{
          title: 'Shorts',
          icon: shortIcon,
          to: '/shorts',
        }"
      /> -->
      <VerticalNavLink
        :item="{
          title: 'Subscription',
          icon: subScriptionIcon,
          to: '/subscription',
        }"
      />
      <VDivider class="my-2" />

      <VerticalNavLink
        :item="{
          title: 'You',
          appendIcon: 'mdi-chevron-right',
          to: '/feed/you',
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
      <VDivider class="my-2" />
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
      <VDivider class="my-2" />
      <VerticalNavSectionTitle
        :item="{
          heading: 'More from YouTube',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Youtube premium',
          icon: youTubePremiumIcon,
          to: '/podcasts',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Youtube Music',
          icon: youTubeMusicIcon,
          to: '/podcasts',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Youtube Kids',
          icon: youTubeKidsIcon,
          to: '/podcasts',
        }"
      />
      <VDivider class="my-2" />
      <VerticalNavLink
        :item="{
          title: 'Settings',
          icon: youTubeSettingIcon,
          to: '/podcasts',
        }"
        class="mt-3"
      />
      <VerticalNavLink
        :item="{
          title: 'Report history',
          icon: youTubeFlagIcon,
          to: '/podcasts',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Help',
          icon: youTubeHelpIcon,
          to: '/podcasts',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Send feedback',
          icon: youTubeFeedBackIcon,
          to: '/podcasts',
        }"
      />
      <VDivider class="my-2" />
      <div class="ytd-guide">
        <div class="ytd-guide__renderer">
          <a href="https://www.youtube.com/about/">About</a>
          <a href="https://www.youtube.com/about/press/" >Press</a>
          <a href="https://www.youtube.com/about/copyright/" >Copyright</a><br />
          <a href="/t/contact_us/" >Contact us</a>
          <a href="https://www.youtube.com/creators/" >Creators</a> <br />
          <a href="https://www.youtube.com/ads/" >Advertise</a>
          <a href="https://developers.google.com/youtube" >Developers</a>
        </div>
        <div class="ytd-guide__renderer">
          <a href="/t/terms">Terms</a>
          <a href="/t/privacy" >Privacy</a>
          <a href="https://www.youtube.com/about/policies/" >Policy &amp; Safety</a> <br />
          <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen" >How YouTube works</a> <br />
          <a href="/new" >Test new features</a>
        </div>
        <div class="ytd-guide__policy">
          <div dir="ltr" style="display:inline">© 2024 Google LLC</div>
        </div>
      </div>
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
  border-radius: 0.375rem;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
.yt-topbar {
  &__search-tag {
    max-width: 30rem;
    min-width: fit-content;
  }
  &__button {
    color: #0f0f0f !important;
    border-radius: 100% !important;
    height: 2.5rem;
    font-size: 1rem;
  }
  &__append-inner-button {
    border-left: 1px solid grey;
    border-radius: 0;
    height: 100%;
    padding-right: 0;
    .v-btn__content {
      svg {
        font-size: x-large;
         color: grey;
      }
    }
  }
}
.ytd-guide {
  &__renderer {
    padding-left: 1.5625rem;
    padding-top: 0.625rem;
    a {
      color: #606060;
      font-size: 0.8125rem;
      font-weight: 600;
      padding: 0.1875rem;
    }
  }
  &__policy {
    padding: 1rem 1.5rem;
    color: #909090;
    font-family: "Roboto","Arial",sans-serif;
    font-size: 0.8rem;
    line-height: 1.8rem;
    font-weight: 400;
  }
}
</style>
