<template>
  <div class="CreatePost row border p-3 m-3 d-flex justify-content-center bg-primary text-light rounded shadow-lg">
    <form @submit.prevent="createPost">
      <div class="form-group">
        <label for="exampleFormControlTextarea1" class="d-flex justify-content-center">Create New Post!</label>
        <div>
          <input type="text" v-model="state.newPost.body" placeholder="New Post" required>
        </div>
        <div class="form-group mt-3">
          <label for="imgUrl" class="sr-only">img:</label>
          <input class="form-control"
                 placeholder="image"
                 type="text"
                 id="imgUrl"
                 v-model="state.newPost.imgUrl"
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
</template>

<script>
import { reactive } from 'vue'
import Notification from '../utils/Notification'
import { postService } from '../services/PostsService'

export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.newPost)
          await postService.getPosts()
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
