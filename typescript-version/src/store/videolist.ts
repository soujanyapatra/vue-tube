import { defineStore } from 'pinia'
import $http from '../plugins/axios'

export const useVideoStore = defineStore('video', () => {
  const videoList = ref<any[]>([])
  const limit = ref<number>(9)
  const searchText = ref<string>('')
  const YOUR_API_KEY = ref<string>('AIzaSyAbmQ1ZdsmCgWYuQHbTEPuzomWGOJEv3YY')
  const nextPageToken = ref<string>('')
  const startLoading = ref<boolean>(false)

  const getVideoList = async () => {
    try {
      // for not to exhaust API limit
      if (videoList.value.length)
        return

      startLoading.value = true

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet',
        q: searchText.value,
        CategoryId: 'HOME',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
      }

      const { data } = await $http.get('https://www.googleapis.com/youtube/v3/search', { params })

      if (data) {
        videoList.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
        startLoading.value = false
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  return {
    // Data
    videoList,
    limit,
    startLoading,

    // Function
    getVideoList,
  }
})

export default useVideoStore
