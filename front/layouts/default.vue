<template>
  <div>
    <top-header />
    <main id="main" role="main">
      <nuxt />
    </main>
    <bottom-footer />
  </div>
</template>
<script>
import TopHeader from '~/components/inc/TopHeader.vue'
import BottomFooter from '~/components/inc/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>
