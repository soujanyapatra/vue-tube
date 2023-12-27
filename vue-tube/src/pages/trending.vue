<script lang="ts" setup>
import { useRoute } from 'vue-router'
import TrendingNow from '@/components/trendingNow.vue'

const route = useRoute()

// Data
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Now', tab: 'now' },
  { title: 'Music', tab: 'music' },
  { title: 'Gaming', tab: 'gaming' },
  { title: 'Movies', tab: 'movies' },
]
</script>

<template>
  <div class="yt-trending">
    <VRow>
      <VCol cols="2">
        <VImg
          src="https://www.youtube.com/img/trending/avatar/trending.png"
          height="80"
          width="80"
          alt=""
          class="yt-trending__img"
        />
      </VCol>
      <VCol cols="10">
        <div class="d-flex">
          <h1>Trending</h1>
        </div>
      </VCol>
    </VRow>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.tab"
        :value="item.tab"
        tag="div"
        type="text"
        class="yt-trending__tab-btn"
      >
        <div class="title-text">
          {{ item.title }}
        </div>
      </VTab>
    </VTabs>
    <VDivider />

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
    >
      <VWindowItem value="now">
        <TrendingNow />
      </VWindowItem>

      <VWindowItem value="music">
        <div />
      </VWindowItem>

      <VWindowItem value="gaming">
        <div />
      </VWindowItem>

      <VWindowItem value="movies">
        <div />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<style lang="scss">
.yt-trending {
  &__img {
    border-radius: 3.125rem;
  }
  h1 {
    color: black;
  }
  &__tab-btn {
    text-transform: capitalize;
    .v-btn__content {
      .v-tab__slider{
        background: black !important;
      }
    }
  }
  .v-tab.v-tab {
    min-width: 3.125rem;
  }
}
.v-slide-group-item--active {
  .v-btn__content {
    .title-text {
      color: black;
      font-weight: 500;
    }
  }
}
</style>
