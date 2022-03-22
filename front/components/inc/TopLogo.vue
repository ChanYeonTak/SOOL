<template>
  <div class="top-logo">
    <router-link to="/">
      <img src="/img/logo/BYOB_logo.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopLogo'
}
</script>

<style lang="scss" scoped>
.top-logo {
  @include flex;
  @include flex($v: center, $h:center);
  padding: 0.75em;

  @include SM {
    display: none;
  }
}
</style>
