<template>
  <ul class="navi-wrap">
    <li class="search mr-2">
      <input type="text" class="form-control mr-2 flex-grow-1 rounded-pill" name="query" placeholder="현재 개발 중. 조금만 더 기다려주세요. " autofocus>
    </li>
    <li class="account">
      <fa-layers class="user">
        <fa-icon icon="user" />
      </fa-layers>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.navi-wrap {
  @include rel;
  @include flex($h: space-between, $v:center);
  li {
    cursor: pointer;
    @include flex($h: center, $v:center);
  }
  .search input{
    width: 300px;
    height: 40px;
    font-size: .7em;
    border: 1px solid $dark-color;
    @include MD {
      width: 250px;
    }
  }
    .account .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $white-color;
    border: 1px solid $dark-color;
    font-size: 1.5em;
    @include flex($v: center, $h: center);
   }

}

</style>
