<template>
  <header class="header-wrapper">
    <div class="header-wrap">
      <div class="logo">
        <TopLogo />
        <TopLogoMobile />
      </div>
      <TopNavi class="navi-pc" />
    </div>
  </header>
</template>

<script>
import TopLogo from './TopLogo.vue'
import TopLogoMobile from './TopLogoMobile.vue'
import TopNavi from './TopNavi.vue'

export default {
  name: 'Header',
  components: {
    TopLogo,
    TopLogoMobile,
    TopNavi
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include header;
  width: 100%;
  opacity: 0.95;
  background-color: $white-color;
  color: $dark-color;
  font-size: 1em;
  }
    .header-wrap {
    width: 1080px;
    max-width: 100%;
    height: 50px;
    @include flex($h: space-between, $v: center);
    }

</style>
