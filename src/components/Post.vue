<template>
  <div class="card text-left m-3 shadow-lg">
    <img :src="post.imgUrl" class="img-fluid" />
    <div class="card-body">
      <h4 class="card-title">
        <div>{{ post.body }}</div>
      </h4>
    </div>
    <div class="container d-flex justify-content-center justify-content-between">
      <button class="btn btn-primary" @click="like">
        Like me! {{ post.likes.length }}
      </button>
      <button class="btn btn-danger" @click="deletePost">
        Delete
      </button>
    </div>
    <div class="text-right p-2">
      {{ createdAt() }} by:
      <router-link :to="{name: 'Profile', params: { id: post.creator.id }}">
        <img :src="
               post.creator.picture"
             class="rounded-pill"
             height="45"
        />
        {{ post.creator.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reactive } from '@vue/reactivity'
import { postService } from '../services/PostsService'

export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      like: 1
    })
    return {
      state,
      createdAt() {
        const x = moment(props.post.createdAt).from(new Date())
        return x
      },
      async deletePost() {
        await postService.deletePost(props.post.id)
      },
      async like() {
        await postService.like(state.like)
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
