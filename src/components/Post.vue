<template>
  <div class="Post my-3 mx-5">
    <div class="row shadow bg-light rounded p-3 post">
      <div class="col-2">
        <img :src="post.creator.picture" alt="profilePic" class="img-fluid img-thumbnail">
      </div>
      <b class="col-10">
        {{ post.creator.name }}
      </b>
      <div class="col-12">
        {{ post.body }}
      </div>
      <div class="col-12">
        <img :src="post.imgUrl" alt="Picture" class="img-fluid">
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
