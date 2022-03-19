<template>
  <header class="header-wrapper">
    <TopLogo class="navi-pc" />
    <TopNavi class="navi-mobile" />
  </header>
</template>

<script>
import TopLogo from './TopLogo.vue'
import TopNavi from './TopNavi.vue'

export default {
  name: 'Header',
  components: {
    TopLogo,
    TopNavi
  }
}
</script>

<style lang="scss" scoped>
 header {
   font-weight:700;
 }
 .header-wrapper {
  @include rel;
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1em;
  .navi-pc {
    @include MD {
      display: none;
    }
  }
  .navi-mobile {
    display: none;
    @include MD {
      display: flex;
    }
  }
}

</style>
