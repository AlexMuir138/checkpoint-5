<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row">
      <div class="col-12">
        <h3>Welcome to the profile page!</h3>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img :src="activeProfile.picture" class="rounded-circle" height="45" alt="" srcset="">
        {{ activeProfile.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => {
    })
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>

</style>
