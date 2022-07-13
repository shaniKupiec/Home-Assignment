<template>
  <section class="app">
    <AppHeader />
    <router-view />
  </section>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
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
