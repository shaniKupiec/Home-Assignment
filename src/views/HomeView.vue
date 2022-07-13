<template>
  <section>
    <HomeHeader />
    <router-view></router-view>
  </section>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'

export default {
//  props: {
//    car: Object,
//  },
  components: {
    HomeHeader
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
}
</script>