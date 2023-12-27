<script setup lang="ts">
import { isEmpty } from 'lodash'
import { useRouter } from 'vue-router'
import { googleLogout } from 'vue3-google-login'
import { useUserStore } from '@/store/userStore'

// Composables
const userStore = useUserStore()
const { userData, dummyData } = storeToRefs(userStore)
const router = useRouter()

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

    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- 👉 User Avatar & Name -->
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

        <!-- 👉 Profile -->
        <VListItem link>
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-user"
              size="22"
            />
          </template>

          <VListItemTitle>Profile</VListItemTitle>
        </VListItem>

        <!-- 👉 Settings -->
        <VListItem link>
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-cog"
              size="22"
            />
          </template>

          <VListItemTitle>Settings</VListItemTitle>
        </VListItem>

        <!-- 👉 Pricing -->
        <VListItem link>
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-dollar"
              size="22"
            />
          </template>

          <VListItemTitle>Pricing</VListItemTitle>
        </VListItem>

        <!-- 👉 FAQ -->
        <VListItem link>
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-help-circle"
              size="22"
            />
          </template>

          <VListItemTitle>FAQ</VListItemTitle>
        </VListItem>

        <!-- Divider -->
        <VDivider class="my-2" />

        <!-- 👉 Logout -->
        <VListItem to="/login">
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-log-out"
              size="22"
            />
          </template>

          <VListItemTitle @click="logout">
            Logout
          </VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
