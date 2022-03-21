<template>
  <body>
    <div class="index">
      <div class="img main1" />
      <div class="img main2" />
    </div>
  </body>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
  .index {
    z-index: 0;
    overflow: auto;
    @include flex($w:wrap);
      .img {
       background-size: contain;
       background-repeat: no-repeat;
       width: 100%;
       height: 0;
       padding-top: 56.2%;
      }
      .main1 {
       background-image: url('~assets/img/main/main1.png');
       }
      .main2 {
      background-image: url('~assets/img/main/main2.png');
      }
  }
</style>
