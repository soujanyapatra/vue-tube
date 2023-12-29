<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router'
import Vue3ProgressBar from '@ctechhindi/vue3-progress-bar'
import { hexToRgb } from '@layouts/utils'

const router = useRouter()

const progress = inject('progress')

const { global } = useTheme()

router.beforeEach(() => {
  progress?.start()
})

router.afterEach(() => {
  progress?.finish()
})

onMounted(async () => {
  progress?.finish()
})
</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
    <Vue3ProgressBar />
    <RouterView />
  </VApp>
</template>
