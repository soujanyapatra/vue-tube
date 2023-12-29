<script setup lang="ts">
import moment from 'moment'
import useVideo from '../composables/useVideo'

// interface
interface Props {
  video: any
  number: number
  icon: string
}

// props
const props = defineProps<Props>()

// Composable
const { convertViews, formatTimeDifference } = useVideo()

// Data
</script>

<template>
  <div class="yt-video">
    <VRow>
      <VCol
        cols="12"
        md="4"
        sm="4"
        lg="3"
      >
        <div class="d-flex justify-center">
          <div>
            <div v-if="props?.number" class="d-flex mt-10 mr-2">
              {{ props?.number }}
            </div>
            <div v-if="props?.icon" class="d-flex mt-10">
              <VIcon :icon="props?.icon" />
            </div>
          </div>
          <VCard
            height="100"
            width="180"
            class="yt-video__card"
          >
            <VImg class="yt-video__img" :src="props?.video?.snippet?.thumbnails?.medium?.url" />
          </VCard>
        </div>
      </VCol>
      <VCol
        cols="12"
        md="7"
        sm="7"
        lg="8"
      >
        <div class="yt-video0-card__description-info">
          <VRow>
            <VCol
              cols="10"
              class="d-flex"
            >
              <div class="d-flex align-center yt-video__card-title">
                {{ props?.video?.snippet?.title }}
              </div>
            </VCol>
            <VCol cols="2">
              <VBtn
                icon=""
                variant="plain"
                class="float-right mt-6"
              >
                <VIcon icon="mdi-dots-vertical" />
              </VBtn>
            </VCol>
          </VRow>
          <VRow>
            <VCol
              cols="6"
              class="pt-0"
            >
              <div class="d-flex">
                <div class="yt-video__channel-title">
                  {{ props?.video?.snippet?.channelTitle }}
                </div>
                <div class="yt-video__views mx-2">
                  {{ convertViews(props?.video?.statistics?.viewCount) }}
                </div>
                <div class="yt-video__views mx-3">
                  {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
                </div>
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
    :hover {
      background-color: #F0F0F0;
    }
    .v-col-lg-3 {
    max-width: fit-content;
    }
    &__card {
      border-radius: 0.75rem;
    }
    &__img {
      img {
        border-radius: 30px;
      }
    }

    &__card-title {
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
      text-overflow: ellipsis;
    }

    &__views {
      overflow: hidden;
      color: #606060;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
    }
    &__description {
      color: #606060;
      padding-top: 0.5rem;
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
