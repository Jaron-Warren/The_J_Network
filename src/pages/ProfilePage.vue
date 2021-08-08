<template>
  <div class="profile col-12">
    <div class="row">
      <div class="col-9">
        <div class="m-3">
          <Profile :profile="profile" />
        </div>
        <div v-for="p in posts" :key="p.id">
          <Post :post="p" />
        </div>
      </div>
      <div class="col-3">
        <div v-for="a in ads" :key="a.title">
          <Ads :ad="a" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Pop from '../utils/Notifier'
import { profileService } from '../services/ProfileService'
import { postService } from '../services/PostService'
import { adsService } from '../services/AdsService'

export default {
  name: 'ProfilePage',
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await profileService.getProfileById(router.params.id)
        await postService.getPostsById(router.params.id)
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      ads: computed(() => AppState.ads),
      profile: computed(() => AppState.activeUserProfile),
      posts: computed(() => AppState.activeUserPosts)
    }
  }
}
</script>

<style scoped>

</style>
