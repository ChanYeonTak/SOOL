<template>
  <body>
    <Main />
    <Feature />
    <Schedule />
  </body>
</template>

<script>
import Main from '~/components/index/Main.vue'
import Feature from '~/components/index/Feature.vue'
import Schedule from '~/components/index/Schedule.vue'

export default {
  components: {
    Main, Feature, Schedule
  }
}
</script>
