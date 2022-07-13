<template>
  <MarketFilter :filterOptions="filterOptions" :filter="filter" @onFilter="onFilter" />
  <MarketSearch :searchBtns="searchBtns" @onSearch="onSearch"/>
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
      this.$store.dispatch({ type: "setFilter", filter: selected });
    },
    onSearch(search) {
      this.$store.dispatch({ type: "setSearch", search });
    },
  },
  computed: {
    filterOptions() {
      return this.$store.getters.filterOptions;
    },
    filter() {
      return this.$store.getters.filter;
    },
    marketData() {
      return this.$store.getters.marketData;
    },
    searchBtns(){
      return this.$store.getters.searchBtns;
    }
  },
};
</script>
