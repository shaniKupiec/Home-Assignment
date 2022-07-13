<template>
  <section class="market-list">
    <header class="market-list__header">
      <span class="market-list__header__number">numebr</span>
      <span class="market-list__header__title">title</span>
    </header>
    <ul class="market-list__list">
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
