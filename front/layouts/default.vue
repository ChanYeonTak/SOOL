<template>
  <div>
    <TopHeader />
    <Nuxt />
    <BottomFooter />
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
