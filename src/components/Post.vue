<template>
  <div class="Post my-4 col-12">
    <div class="row shadow bg-light rounded p-3">
      <div class="col-2">
        <router-link :to="{ name: 'ProfilePage', params: {id: post.creator.id } }">
          <img :src="post.creator.picture" alt="profilePic" class="img-fluid img-thumbnail">
        </router-link>
      </div>
      <div class="col-10 text-left">
        <b>{{ post.creator.name }}</b>
        <br>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
