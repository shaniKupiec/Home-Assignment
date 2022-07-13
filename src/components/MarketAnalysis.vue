<template>
  <MarketFilter :filterOptions="filterOptions" :filterDates="filterDates" :filter="filter" @onFilter="onFilter" />
  <MarketSearch />
  <main class="market-analysis">
    <MarketList :marketData="marketData" />
    <MarketChart />
  </main>
</template>

<script>
import MarketFilter from "./Market/MarketFilter.vue";
import MarketSearch from "./Market/MarketSearch.vue";
import MarketList from "./Market/MarketList.vue";
import MarketChart from "./Market/MarketChart.vue";

export default {
  components: {
    MarketFilter,
    MarketSearch,
    MarketList,
    MarketChart,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onFilter(selected) {
      console.log("selected", selected);
      this.$store.dispatch({ type: "setFilter", filter: selected });
    },
  },
  computed: {
    filterOptions() {
      return this.$store.getters.filterOptions;
    },
    filterDates() {
      return this.$store.getters.filterDates;
    },
    filter() {
      return this.$store.getters.filter;
    },
    marketData() {
      return this.$store.getters.marketData;
    },
  },
};
</script>
