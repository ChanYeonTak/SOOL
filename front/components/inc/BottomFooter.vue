<template>
  <footer>
    <div> COMPANY 비와이오비(BYOB) OWNER TAK CHAN YEON BUSINESS LICENCE 584-04-02450 </div>
    <div>
      <fa-layers class="fa-2x">
        <fa-icon icon="phone" />
      </fa-layers>
      <fa-layers class="fa-2x">
        <fa-icon icon="envelope" />
      </fa-layers>
      <fa-layers class="fa-2x">
        <fa-icon :icon="['fab', 'instagram']" />
      </fa-layers>
    </div>
    <div>
      Copyright
      Copyright ⓒ BYOB. All rights reserved.
      · Terms of Use
      · Privacy Policy
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  font-size: 0.875em;
  background-color: $dark-color;
  color: $light-color;
  padding: 1em;
  text-align: center;
}
</style>
