<template>
  <AppHeader />
  <HomeNav />
  <router-view></router-view>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import HomeNav from "../components/HomeNav.vue";

export default {
  components: {
    HomeNav,
    AppHeader,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
