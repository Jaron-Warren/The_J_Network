<template>
  <div class="profile text-center">
    <div class="row shadow bg-light rounded m-3 p-3">
      <div class="col-12">
        <img :src="profile.coverImg" alt="banner" class="img-fluid">
      </div>
      <div class="col-3">
        <img :src="profile.picture" alt="profilePic" class="img-fluid img-thumbnail">
      </div>
      <div class="col-6 text-center">
        <i class="mdi mdi-school" v-if="profile.graduated">Alumni member</i>
      </div>
      <div class="col-1 mdi mdi-github">
        <span class="tooltiptext">Tooltip text</span>
      </div>
      <div class="col-1 mdi mdi-linkedin">
        <span class="tooltiptext">{{ profile.linkedin }}</span>
      </div>
      <div class="col-1 mdi mdi-certificate-outline resume">
        <span class="tooltiptext">Tooltip text</span>
      </div>
      <div class="col-12">
        {{ profile.class }}
      </div>
      <div class="col-12">
        {{ profile.name }}
      </div>
      <div class="col-12">
        {{ profile.bio }}
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button>edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.tooltiptext {
    opacity: 0;
  transition: opacity 1s;
}

.tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
  opacity: 1;
}
</style>
