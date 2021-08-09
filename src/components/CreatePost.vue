<template>
  <div class="createpost col-12">
    <div class="row shadow bg-light rounded p-3">
      <div class="col-3">
        <img :src="profile.picture" alt="profilePic" class="img-fluid img-thumbnail">
      </div>
      <div class="col-9">
        <form @submit.prevent="createPost(state.post)">
          <textarea v-model="state.post.body" type="text" placeholder="What's on your mind?" class="text-left form-control input-group-text mb-2" rows="3" />
          <div class="d-flex justify-content-between">
            <button>Add photo</button>
            <button type="submit" class="ml-1">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      post: {
      }
    })
    return {
      state,
      profile: computed(() => AppState.userProfile),
      async createPost(post) {
        try {
          await postService.createPost(post)
          state.post = {}
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
