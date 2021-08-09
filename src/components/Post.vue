<template>
  <div class="Post my-4 col-12">
    <div class="row shadow bg-light rounded p-3">
      <div class="col-2">
        <router-link :to="{ name: 'ProfilePage', params: {id: post.creator.id } }">
          <img :src="post.creator.picture" alt="profilePic" class="img-fluid img-thumbnail">
        </router-link>
      </div>
      <div class="col-10 text-left">
        <div class="d-flex justify-content-between">
          <b>{{ post.creator.name }}</b>
          <div v-if="account.id === post.creator.id">
            <button class="btn btn-danger" @click.stop="destroy">
              delete
            </button>
          </div>
        </div>
        <br>
        <span class="text-muted">{{ post.createdAt }}</span>
        <div class="col-12 text-center">
          {{ post.body }}
        </div>
        <div class="col-12 d-flex justify-content-center">
          <img :src="post.imgUrl" alt="Picture" class="img-fluid" v-if="post.imgUrl">
        </div>
        <div class="col-12 text-right">
          <i class="mdi mdi-thumb-up-outline"></i> <span v-if="post.likes.length > 0">+{{ post.likes.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      destroy() {
        postService.destroy()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
