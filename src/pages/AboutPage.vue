<template>
  <div class="about text-center">
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6 my-5">
        <h1>This is the about page</h1>
        <p>You'll notice that this page is barren. You don't really care to know more about us do you? Tread lightly...</p>
        <img src="https://reactiongifs.me/wp-content/uploads/2013/11/the-smile-man-willen-dafoe-creepy.gif" alt="">
      </div>
      <div class="col-3">
        <RandomAd v-for="r in randomAds" :key="r" :random-ad="r" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'AboutPage',
  setup() {
    const state = reactive({

    })
    return {
      state,
      randomAds: computed(() => AppState.randomAds)

    }
  }
}
</script>
