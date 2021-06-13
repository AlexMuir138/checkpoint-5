<template>
  <div class="row">
    <div class="col-12 ">
      <div>
        <CreatePost v-if="account.id == $route.params.id" />
      </div>

      <Profile />

      <Thread />
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
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({ })

    watchEffect(async() => {
      try {
        await profileService.getProfile(route.params.id)
        await postService.getPosts('api/posts?creatorId=' + route.params.id)
      } catch (error) {
        Notification.toast('this user does not exist', 'warning', 'center')
        router.push({ name: 'Home' })
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
