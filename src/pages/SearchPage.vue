<template>
  <div class="search">
    <div class="col-12">
      <div class="row">
        <div class="col-9">
          <div class="h2">
            People:
          </div>
          <!-- REVIEW why does id not exsist on profile but _id does? -->
          <div v-for="p in profiles" :key="p._id">
            <ProfileResult :profile="p" />
          </div>
          <div class="h2">
            Posts:
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
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
import { router } from '../router'

export default {
  name: 'SearchPage',
  setup() {
    onMounted(async() => {
      try {
        // REVIEW help passing query data to new page correctly. I made a hacky solution
        await postService.getPostsByQuery()
        await profileService.getProfilesByQuery()
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      ads: computed(() => AppState.ads),
      posts: computed(() => AppState.posts),
      profiles: computed(() => AppState.profilesquery)
    }
  }
}
</script>
