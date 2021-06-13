<template>
  <div class="container-fluid d-flex justify-content-center" v-if="!state.editProfile">
    <div class="row">
      <div class="col-12">
        <h3>Welcome to the profile page!</h3>
      </div>
    </div>
  </div>

  <div class="container-fluid" v-if="!state.editProfile">
    <div class="row">
      <div class="col-12">
        <img :src="activeProfile.picture" class="rounded-circle" height="45" alt="" srcset="">
        <button class="btn btn-info" @click="state.editProfile = true" v-if="activeProfile.id === account.id">
          Edit
        </button>
        {{ activeProfile.name }}
      </div>
    </div>
  </div>

  <div class="container-fluid" v-if="state.editProfile">
    <div class="row">
      <form @submit.prevent="editProfile">
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="d-flex justify-content-center">Make it your own!</label>
          <div>
            <input type="text" v-model="account.name" placeholder="New Name" name="name" required>
          </div>
          <div class="form-group mt-3">
            <label for="imgUrl" class="sr-only">img:</label>
            <input class="form-control"
                   placeholder="image"
                   type="text"
                   id="imgUrl"
                   name="imgUrl"
                   v-model="account.picture"
                   required
            />
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-info">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { profileService } from '../services/ProfileService'
export default {

  setup() {
    const state = reactive({
      editProfile: false
    })
    onMounted(() => {
    })
    return {
      state,
      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account),
      async editProfile(newForm) {
        await profileService.editProfile(newForm.target.imgUrl.value, newForm.target.name.value)
        await profileService.getProfile(this.activeProfile.id)
        state.editProfile = false
      }
    }
  }
}
</script>

<style scoped>

</style>
