<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <Post v-for="p in posts" :key="p" :post="p" />
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

  setup() {
    const state = reactive({

    })
    return {
      state,
      posts: computed(() => AppState.posts),
      randomAds: computed(() => AppState.randomAds)

    }
  },
  components: {}
}
</script>

<style scoped>

</style>
