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
            <button type="button" data-toggle="modal" :data-target="'#profile-picture'+ profile.id">
              Add photo Url
            </button>
            <button type="submit" class="ml-1">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal"
       :id="'profile-picture'+ profile.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title">
            Add a single picture! (I dare you)
          </h5>
          <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-dark">
          <div class="container-fluid">
            <div class="form-group">
              <label class="pr-2" for="photos">image Url:</label>
              <input type="text"
                     id="postPhoto"
                     class="form-control"
                     placeholder="Single Image Url"
                     v-model="state.post.imgUrl"
              >
            </div>
          </div>
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
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
      profile: computed(() => AppState.user),
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
