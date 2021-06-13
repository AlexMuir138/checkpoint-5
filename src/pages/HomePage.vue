<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="col-3">
      <CreatePost />
    </div>
    <Thread />
  </div>
</template>

<script>
import Notification from '../utils/Notification'
import { onMounted } from '@vue/runtime-core'
import { postService } from '../services/PostsService'
import { adsService } from '../services/AdsService'

export default {

  setup() {
    onMounted(async() => {
      try {
        postService.getPosts()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    onMounted(async() => {
      try {
        adsService.getAds()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
