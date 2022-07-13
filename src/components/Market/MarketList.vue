<template>
  <section>
    <ul>
      <MarketPreview v-for="marketInfo in marketData" :key="marketInfo.id" :marketInfo="marketInfo" />
    </ul>
  </section>
</template>

<script>
import MarketPreview from "./MarketPreview.vue";

export default {
  props: {
    marketData: Object,
  },
  components: {
    MarketPreview,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
