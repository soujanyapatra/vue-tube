<script setup lang="ts">
import moment from 'moment'
import useVideo from '../composables/useVideo'

// interface
interface Props {
  video: any
}

// props
const props = defineProps<Props>()

// Composable
const { convertViews, formatTimeDifference } = useVideo()

// Data
</script>

<template>
  <div class="yt-video">
    <VRow class="pa-0">
      <VCol cols="3">
        <VCard
          height="170"
          width="300"
          class="yt-video__card"
        >
          <VImg :src="props?.video?.snippet?.thumbnails?.medium?.url" />
        </VCard>
      </VCol>
      <VCol cols="9">
        <div class="yt-video0-card__description-info">
          <VRow>
            <VCol cols="10">
              <div class="yt-video__card-title">
                {{ props?.video?.snippet?.title }}
              </div>
            </VCol>
            <VCol cols="2">
              <VBtn
                icon=""
                variant="plain"
              >
                <VIcon icon="mdi-dots-vertical" />
              </VBtn>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <div class="yt-video__channel-title">
                {{ props?.video?.snippet?.channelTitle }}
              </div>
            </VCol>
            <VCol>
              <div class="yt-video__views">
                {{ convertViews(props?.video?.statistics?.viewCount) }}
              </div>
            </VCol>
            <VCol>
              <div class="yt-video__views">
                {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
              </div>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <div class="yt-video__description">
                {{ props?.video?.snippet?.description.substring(0, 200) }}
              </div>
            </VCol>
          </VRow>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped lang="scss">
  .yt-video {
    &__card {
      border-radius: 0.75rem;
    }

    &__card-title {
      display: block;
      display: box;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #0f0f0f;
      cursor: pointer;
      font-family: Roboto, Arial, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
      line-height: 1.3rem;
      max-block-size: 4rem;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &__channel-title {
      overflow: hidden;
      color: #606060;
      font-size: 0.875rem;
      font-weight: 500;
      margin-inline-start: 18%;
      text-overflow: ellipsis;
    }

    &__views {
      overflow: hidden;
      color: #606060;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
      margin-inline-start: 18%;
    }
    &__description {
      color: #606060;
      padding-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-family: "Roboto","Arial",sans-serif;
      font-size: 0.875rem;
      line-height: 1.2rem;
      font-weight: 400;
      overflow: hidden;
      display: block;
      max-height: 3.6rem;
      -webkit-line-clamp: 2;
      display: box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: normal;
    }
  }
</style>
