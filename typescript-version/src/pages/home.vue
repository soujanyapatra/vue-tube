<script setup lang="ts">
import $http from '../plugins/axios'
import VdCard from '@/components/videoCard.vue'

const videoList = ref<any>()
const YOUR_API_KEY = ref<any>('AIzaSyAEBy04vqQwXnPFbRdIzbZTDqVvPLPYZDM')

const getVideoList = async () => {
  try {
    const { data } = await $http.get(`/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&key=${YOUR_API_KEY.value}`)

    videoList.value = data
    console.log(videoList)
  }
  catch (error) {
    console.error('Error:', error)
  }
}

onMounted(async () => {
  await getVideoList()
})
</script>

<template>
  <div />
  <VRow>
    <VCol
      v-for="details in videoList?.items"
      :key="details.id"
      cols="12"
      sm="6"
      md="4"
      lg="4"
    >
      <VdCard :video="details" />
    </VCol>
  </VRow>
</template>
