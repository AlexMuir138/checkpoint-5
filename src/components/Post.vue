<template>
  <div class="card text-left m-3 shadow-lg" v-if="!state.editPost">
    <img :src="state.post.imgUrl" class="img-fluid" />
    <div class="card-body">
      <h4 class="card-title">
        <div>{{ state.post.body }}</div>
      </h4>
    </div>
    <div class="container d-flex justify-content-center justify-content-between">
      <button class="btn btn-primary" @click="like">
        Like me! {{ state.post.likes.length }}
      </button>
      <button class="btn btn-danger" @click="deletePost" v-if="state.post.creator.id === account.id">
        Delete
      </button>
      <button class="btn btn-info" @click="state.editPost = true" v-if="state.post.creator.id === account.id">
        Edit
      </button>
    </div>
    <div class="text-right p-2">
      {{ createdAt() }} by:
      <router-link :to="{name: 'Profile', params: { id: state.post.creator.id }}">
        <img :src="
               state.post.creator.picture"
             class="rounded-pill"
             height="45"
        />
        {{ state.post.creator.name }}
      </router-link>
    </div>
  </div>
  <div class="container-fluid" v-if="state.editPost">
    <div class="row">
      <form @submit.prevent="editPost">
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="d-flex justify-content-center">Create New Post!</label>
          <div>
            <input type="text" v-model="state.post.body" placeholder="New Post" required>
          </div>
          <div class="form-group mt-3">
            <label for="imgUrl" class="sr-only">img:</label>
            <input class="form-control"
                   placeholder="image"
                   type="text"
                   id="imgUrl"
                   v-model="state.post.imgUrl"
                   required
            />
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info ">
              Create!
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reactive, computed } from '@vue/reactivity'
import { postService } from '../services/PostsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      like: 1,
      editPost: false,
      editedPost: {},
      post: props.post
    })
    const route = useRoute()
    return {
      state,
      account: computed(() => AppState.account),
      createdAt() {
        const x = moment(props.post.createdAt).from(new Date())
        return x
      },
      async deletePost() {
        await postService.deletePost(props.post.id)
        await postService.getPosts()
      },
      async like() {
        await postService.like(props.post.id)
        await postService.getPosts()
      },
      async editPost() {
        await postService.editPost(state.post)
        await postService.getPosts(route.params.id || null)
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
