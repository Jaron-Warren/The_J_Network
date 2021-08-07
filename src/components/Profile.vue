<template>
  <div class="profile">
    <div class="row shadow bg-light rounded p-3 post">
      <div class="col-12 banner">
        <img src="" alt="banner">
      </div>
      <div class="col-3">
        <img src="" alt="profilePic">
      </div>
      <div class="col6"></div>
      <div class="col-1 mdi mdi-github"></div>
      <div class="col-1 mdi mdi-linkedin"></div>
      <div class="col-1 mdi mdi-certificate-outline"></div>
      <div class="col-12">
        bio
      </div>
      <div class="col-12">
        name
      </div>
      <div class="col-12">
        discription
      </div>
      <div class="col-12">
        <button>edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.banner {
  height: 30%;
  width: 100%;
}
</style>
