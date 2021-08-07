<template>
  <div class="about text-center">
    <div class="m-3">
      <Profile />
    </div>
  </div>
  <div v-for="p in posts" :key="p.id">
    <Post :post="p" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
