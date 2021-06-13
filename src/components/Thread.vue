<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <Post v-for="p in posts" :key="p" :post="p" />
        <button class="btn btn-info" v-for="p in pages.totalPages" :key="p" :page="p" @click="changePage(p)">
          {{ p }}
        </button>
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
import { postService } from '../services/PostsService'
import { useRoute } from 'vue-router'

export default {

  setup() {
    const route = useRoute()
    const state = reactive({

    })
    return {
      state,
      posts: computed(() => AppState.posts),
      randomAds: computed(() => AppState.randomAds),
      pages: computed(() => AppState.pages),

      async changePage(page) {
        console.log(page)
        await postService.getPosts(route.params.id || null, page)
      }
    }
  }

}
</script>

<style scoped>

</style>
