<template>
  <div class="profile">
    <div class="Post my-4 col-12">
      <router-link :to="{ name: 'ProfilePage', params: {id: profile._id } }">
        <div class="row shadow bg-light rounded p-3">
          <div class="col-3">
            <img :src="profile.picture" alt="profilePic" class="img-fluid img-thumbnail">
          </div>
          <div class="col-9 text-left">
            {{ profile.class }}
            <i class="mdi mdi-school" v-if="profile.graduated"> Alumni member</i>
            <br>
            <b>{{ profile.name }}</b>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup(profile) {
    onMounted((profile) => {
      // console.log(profile)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
