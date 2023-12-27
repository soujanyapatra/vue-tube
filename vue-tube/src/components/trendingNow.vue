<script setup lang="ts">
import { useVideoStore } from '../store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'

// Composable
const video = useVideoStore()
const { trendingVideos } = storeToRefs(video)
const { trendingVideoList } = useVideoStore()

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    trendingVideoList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await trendingVideoList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="trendingVideos"
    @load="trendingVideoList"
  >
    <template
      v-for="(details, index) in trendingVideos"
      :key="details.id"
    >
      <div
        class="pa-2"
        :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
      >
        <TdVdCard :video="details" />
      </div>
    </template>
  </VInfiniteScroll>
</template>
