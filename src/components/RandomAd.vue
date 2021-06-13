<template>
  <div class="card rounded m-3 bg-info shadow-lg">
    <div class="card-body">
      <div>
        <img :src="randomAd.tall" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>

<script>

import { reactive } from '@vue/reactivity'

export default {
  props: { randomAd: { type: Object, required: true } },
  setup(props) {
    const state = reactive({

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
