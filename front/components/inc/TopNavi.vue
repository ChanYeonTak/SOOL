<template>
  <ul class="navi-wrap">
    <li>
      <router-link to="/">
        도서리스트
        <small>(Pagination)</small>
      </router-link>
    </li>
    <li>
      <router-link to="/infinite">
        도서리스트
        <small>(Infinite Scroll)</small>
      </router-link>
    </li>
    <li>
      <a href="//soolcloud.com">
        도서관리
        <small>(Express)</small>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
ul.navi-wrap {
  @include flex;
  li {
    font-size: 0.75em;
    cursor: pointer;
    @include flex;
    a {
      @include flex($v: center);
      padding: 0 1.25em;
    }
    &:hover {
      background-color: $secondary-color;
      color: $dark-color;
    }
  }
}
</style>
