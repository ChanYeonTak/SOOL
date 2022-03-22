<template>
  <div class="top-logo-mobile">
    <router-link to="/">
      <img src="/img/logo/BYOB_logo_mobile.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopLogoMobile'
}
</script>

<style lang="scss" scoped>
.top-logo-mobile {
  display: none;
  @include SM {
      @include flex;
  @include flex($v: center, $h:center);
  padding: 0.75em;
    display: block;
}
}
</style>
