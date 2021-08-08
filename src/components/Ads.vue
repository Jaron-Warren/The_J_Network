<template>
  <div class="extra my-5">
    <img :src="ad.tall" alt="we need ad revenue, please turn off your blocker!" class="img-fluid">
  </div>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
