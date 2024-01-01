<script setup lang="ts">
import { isEmpty } from 'lodash'
import { useRouter } from 'vue-router'
import { googleLogout } from 'vue3-google-login'
import { useUserStore } from '@/store/userStore'
import multiImageIcon from '@/Icons/youtube/multi-image.svg'
import googleIcon from '@/Icons/youtube/google.svg'
import signOutIcon from '@/Icons/youtube/sign-out.svg'
import studioIcon from '@/Icons/youtube/ytStudio.svg'
import purchaseIcon from '@/Icons/youtube/ytPurchase.svg'
import dataIcon from '@/Icons/youtube/your-data.svg'
import appearanceIcon from '@/Icons/youtube/apprearance.svg'
import langIcon from '@/Icons/youtube/lang.svg'
import restrictIcon from '@/Icons/youtube/restriction.svg'
import locationIcon from '@/Icons/youtube/location.svg'
import keyShortCutIcon from '@/Icons/youtube/key-shortcuts.svg'
import settingIcon from '@/Icons/youtube/ytSetting.svg'
import helpIcon from '@/Icons/youtube/ytHelp.svg'
import feedBackIcon from '@/Icons/youtube/ytFeedBack.svg'
import rightChevronIcon from '@/Icons/youtube/cheveron.svg'

// Composables
const userStore = useUserStore()
const { userData, dummyData } = storeToRefs(userStore)
const router = useRouter()

// Data
const listItems = ref<any[]>([
  {
    items: [
      {
        label: 'Google account',
        prependIcon: googleIcon,
      },
      {
        label: 'Switch account',
        prependIcon: multiImageIcon,
        appendIcon: rightChevronIcon,
      },
      {
        label: 'Sign out',
        prependIcon: signOutIcon,
      },
    ]
  },
  {
    items: [
      {
        label: 'YouTube studio',
        prependIcon: studioIcon,
        appendIcon: '',
      },
      {
        label: 'Purchases and membership',
        prependIcon: purchaseIcon,
        appendIcon: '',
      }
    ]
  },
  {
    items: [
      {
        label: 'Your data in YouTube',
        prependIcon: dataIcon,
        appendIcon: '',
      },
      {
        label: 'Appearance: Device theme',
        prependIcon: appearanceIcon,
        appendIcon: rightChevronIcon,
      },
      {
        label: 'Language: English',
        prependIcon: langIcon,
        appendIcon: rightChevronIcon,
      },
      {
        label: 'Restricted Mode: Off',
        prependIcon: restrictIcon,
        appendIcon: rightChevronIcon,
      },
      {
        label: 'Location: India',
        prependIcon: locationIcon,
        appendIcon: rightChevronIcon,
      },
      {
        label: 'Keyboard shortcuts',
        prependIcon: keyShortCutIcon,
        appendIcon: '',
      },
    ]
  },
  {
    items: [
      {
        label: 'Setting',
        prependIcon: settingIcon,
        appendIcon: '',
      },
    ]
  },
  {
    items: [
      {
        label: 'Help',
        prependIcon: helpIcon,
        appendIcon: '',
      },
      {
        label: 'Send feedback',
        prependIcon: feedBackIcon,
        appendIcon: '',
      },
    ]
  }
])

// Methods
const logout = () => {
  googleLogout()
  localStorage.clear()
  userData.value = dummyData.value
  nextTick(() => {
    router.push('/login')
  })
}

// Hooks
onMounted(() => {
  if (isEmpty(userData.value.email))
    userData.value = JSON.parse(localStorage.getItem('user'))
})
</script>

<template>
  <VAvatar
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    <VImg :src="userData?.picture" />
    <VMenu
      activator="parent"
      location="left"
      offset="14px"
    >
      <VCard>
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VAvatar
                  color="primary"
                  variant="tonal"
                >
                  <VImg :src="userData?.picture" />
                </VAvatar>
              </VListItemAction>
            </template>
  
            <VListItemTitle class="font-weight-semibold">
              {{ `${userData?.given_name} ${userData?.family_name}` }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData?.email }}</VListItemSubtitle>
            <VListItemSubtitle class="mt-2">
              create a channel
            </VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />
  
          <div v-for="(list, parentIndex) in listItems" :key="parentIndex">
            <div v-for="(i, childIndex) in list.items" :key="childIndex" >
              <VListItem class="yt-user-profile__dropdown" @click="">
                <template #prepend v-if="i.prependIcon">
                  <VIcon :icon="i.prependIcon" />
                </template>
                <template #append v-if="i.appendIcon">
                  <VIcon :icon="i.appendIcon" />
                </template>
                <template #title v-if="i.label">
                  {{ i.label }}
                </template>
              </VListItem>
            </div>
            <VDivider />
          </div>
        </VList>
      </VCard>
    </VMenu>
  </VAvatar>
</template>

<style scoped lang="scss">
.yt-user-profile {
  &__dropdown{
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 8px 0 8px 0;
  }
}
</style>
