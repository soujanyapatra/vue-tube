<script setup lang="ts">
import { useVideoStore } from '../store/videolist'
import WatchLaterVideoCard from '@/components/watchLaterVideoCard.vue';

// Composable
const video = useVideoStore()
const { trendingMoviesList } = storeToRefs(video)
const { trendingMovieList } = useVideoStore()

// Data
const sortList = ref<any[]>([
  {
    label: 'Date added (newest)'
  },
  {
    label: 'Date added (oldest)'
  },
  {
    label: 'Most popular'
  },
  {
    label: 'Date published (newest)'
  },
  {
    label: 'Date published (oldest)'
  }
])

// Hooks
onMounted(() => {
  trendingMovieList()
})
</script>

<template>
  <div class="yt-watch-later">
    <VRow>
      <VCol cols="3">
        <div class="d-flex justify-center">
          <VCard height="850" style="background:linear-gradient(#464F59 5%, #464F59 14%, #464F59 57%)">
            <div class="yt-watch-later__video-card pa-5 mx-4">
              <VCard
                height="170"
                width="300"
              >
                <VImg :src="trendingMoviesList[0]?.snippet?.thumbnails?.medium?.url" />
              </VCard>
              <div class="yt-watch-later__watch-title">
                Liked video
              </div>
              <span class="yt-watch-later__sub-details mt-2">2 videos No views Updated today</span>
              <div>
                <IconBtn class="yt-watch-later__icon-btn">
                  <VIcon icon="tabler-download" />
                </IconBtn>
              </div>
              <div class="mt-5">
                <VBtn variant="text" class="yt-watch-later__buttons">
                  <template #prepend>
                    <VIcon icon="mdi-play" />
                  </template>
                  <template #default>
                    <div class="yt-watch-later__btn-content">
                      Play all
                    </div>
                  </template>
                </VBtn>
                <VBtn
                  variant="text" 
                  class="yt-watch-later__buttons mx-3"
                >
                  <template #prepend>
                    <VIcon icon="tabler-arrows-shuffle" />
                  </template>
                  <template #default>
                    <div class="yt-watch-later__btn-content">
                      Shuffle
                    </div>
                  </template>
                </VBtn>
              </div>
            </div>
          </VCard>
        </div>
      </VCol>
      <VCol cols="9">
        <div>
          <VMenu open-on-click>
            <template #activator="{ props: activate }">
              <VBtn v-bind="activate" variant="text" class="yt-watch-later__sort-btn">
                <template #default>
                  Sort
                </template>
                <template #prepend>
                  <VIcon icon="mdi-sort-variant" />
                </template>
              </VBtn>
            </template>
            <VCard>
              <VList>
                <VListItem v-for="item in sortList" :key="item.label" @click="">
                  <div class="pa-2">
                    {{ item.label }}
                  </div>
                </VListItem>
              </VList>
            </VCard>
          </VMenu>
          <div>
            <VInfiniteScroll
              :items="trendingMoviesList"
              @load="trendingMovieList"
            >
              <template
                v-for="(details, index) in trendingMoviesList"
                :key="details.id"
              >
                <div
                  class="pa-2"
                  :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
                >
                  <WatchLaterVideoCard :video="details" :number="index + 1" />
                </div>
              </template>
            </VInfiniteScroll>
          </div>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.yt-watch-later {
  &__watch-title {
    padding: 0.625rem 0 0 0;
    color: white;
    font-size: 1.875rem;
    font-weight: 600;
  }
  &__sub-details {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 12px;
    line-height: 1.8rem;
    font-weight: 400;
    overflow: hidden;
    display: block;
    max-height: 1.8rem;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: white;
  }
  &__icon-btn {
    color: white;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: white !important; 
  }
  &__btn-content {
    padding: 10px;
  }
  &__sort-btn {
    text-transform: capitalize;
    color: #0f0f0f !important;
  }
} 
</style>
