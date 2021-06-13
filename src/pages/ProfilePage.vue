<template>
  <div class="row">
    <div class="col-12 ">
      <div>
        <CreatePost v-if="account.id == $route.params.id" />
      </div>
      <div class="row">
        <Profile />
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <Thread />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, watchEffect } from 'vue'
import { profileService } from '../services/ProfileService'
import { useRoute, useRouter } from 'vue-router'
import { postService } from '../services/PostsService'
import Notification from '../utils/Notification'
import { adsService } from '../services/AdsService'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({ })

    watchEffect(async() => {
      try {
        await profileService.getProfile(route.params.id)
        await postService.getPosts(route.params.id)
        await adsService.getAds()
      } catch (error) {
        Notification.toast('this user does not exist', 'warning', 'center')
        router.push({ name: 'Home' })
      }
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
