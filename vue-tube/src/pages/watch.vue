<script setup lang="ts">
import useVideo from '@/composables/useVideo'
import { useVideoStore } from '@/store/videolist'
import SuggestionWatchVideo from '@/components/suggestionWatchVideo.vue'

// Composable
const video = useVideoStore()
const { videoDetails } = storeToRefs(video)
const { getVideoById } = useVideoStore()

// Composable
const { convertViews } = useVideo()
const convertedLike = convertViews
const route = useRoute()

// Hook
onMounted(() => {
  getVideoById(route?.query?.v);
})
</script>

<template>
  <VRow class="yt-video-watch" v-if="videoDetails">
    <VCol cols="8">
      <VCard>
        <VImg :src="videoDetails?.snippet?.thumbnails?.maxres?.url" />
      </VCard>
      <div class="yt-video-watch__title my-2">
        {{ `#${videoDetails?.snippet?.categoryId} - ` + videoDetails?.snippet?.title }}
      </div>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <div>
            <v-avatar>
              <v-img
                :src="videoDetails?.snippet?.thumbnails?.maxres?.url"
                alt="profile_image"
              ></v-img>
            </v-avatar>
          </div>
          <div class="mx-2">
            <div class="yt-video-watch__channel-title">
              {{ videoDetails?.snippet?.channelTitle }}
            </div>
            <div>
              subscriber
            </div>
          </div>
          <div>
            <VBtn
              variant="text" 
              class="yt-video-watch__subscribe-btn mx-1"
            >
              <template #default>
                <div class="yt-video-watch__btn-content">
                  Subscribe
                </div>
              </template>
            </VBtn>
          </div>
        </div>
        <div>
          <div>
            <VBtn
              variant="text" 
              class="yt-video-watch__buttons mx-1"
            >
              <template #prepend>
                <VIcon icon="mdi-thumb-up-outline" />
              </template>
              <template #append>
                <VIcon icon="mdi-thumb-down-outline" />
              </template>
              <template #default>
                <div class="yt-video-watch__btn-content">
                  {{ convertedLike(videoDetails?.statistics?.likeCount) }}
                </div>
              </template>
            </VBtn>
            <VBtn
              variant="text" 
              class="yt-video-watch__buttons mx-1"
            >
              <template #prepend>
                <VIcon icon="mdi-arrow-right-top-bold" />
              </template>
              <template #default>
                <div class="yt-video-watch__btn-content">
                  Share
                </div>
              </template>
            </VBtn>
            <VBtn
              variant="text" 
              class="yt-video-watch__buttons mx-1"
            >
              <template #prepend>
                <VIcon icon="tabler-download" />
              </template>
              <template #default>
                <div class="yt-video-watch__btn-content">
                  Download
                </div>
              </template>
            </VBtn>
            <VBtn
              variant="text" 
              class="yt-video-watch__buttons mx-1"
            >
              <template #prepend>
                <VIcon icon="mdi-playlist-plus" />
              </template>
              <template #default>
                <div class="yt-video-watch__btn-content">
                  Save
                </div>
              </template>
            </VBtn>
            <VBtn
              variant="text" 
              class="yt-video-watch__buttons mx-1"
            >
              <template #default>
                <VIcon icon="tabler-dots" />
              </template>
            </VBtn>
          </div>
        </div>
      </div>
    </VCol>
    <VCol cols="4">
      <div>
        <SuggestionWatchVideo />
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.yt-video-watch {
  &__title {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.3rem;
    line-height: 2.8rem;
    font-weight: 700;
    overflow: hidden;
    display: block;
    max-height: 5.6rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: #0f0f0f
  }
  &__icon-btn {
    color: white;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: #E5E5E5 !important; 
  }
  &__btn-content {
    padding: 10px;
  }
  &__subscribe-btn {
    text-transform: capitalize;
    color: white !important;
    border-radius: 1.875rem !important;
    background-color: black !important;
    font-weight: 500;
  }
  &__channel-title {
    color: #0f0f0f;
    font-weight: 500;
  }
} 
</style>
