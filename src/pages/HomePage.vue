<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center px-3">
    <div class="col-12 d-flex justify-content-around m-2">
      <button class="btn btn-secondary" v-if="postsInfo.newer" @click="queryPage('?'+postsInfo.newer)">
        Previous
      </button>
      <div class="" v-if="!postsInfo.newer"></div>
      <div class="text-muted">
        {{ postsInfo.page }}
      </div>
      <div class="" v-if="!postsInfo.older"></div>
      <button class="btn btn-secondary" v-if="postsInfo.older" @click="queryPage('?'+postsInfo.older)">
        Next
      </button>
    </div>
    <div v-for="p in posts" :key="p.id">
      <Post :post="p" />
    </div>
    <div class="col-12 d-flex justify-content-around m-2">
      <button class="btn btn-secondary" v-if="postsInfo.newer" @click="queryPage('?'+postsInfo.newer)">
        Previous
      </button>
      <div class="" v-if="!postsInfo.newer"></div>
      <div class="text-muted">
        {{ postsInfo.page }}
      </div>
      <div class="" v-if="!postsInfo.older"></div>
      <button class="btn btn-secondary" v-if="postsInfo.older" @click="queryPage('?'+postsInfo.older)">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'
import Post from '../components/Post.vue'
export default {
  components: { Post },
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      posts: computed(() => AppState.posts),
      postsInfo: computed(() => AppState.postsInfo),
      async queryPage(query) {
        try {
          await postService.getAll(query)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
