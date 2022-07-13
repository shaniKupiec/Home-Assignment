<template>
  <section>
    <MarketFilter :filterOptions="filterOptions" :filterDates="filterDates"/>
    <MarketSearch />
    <MarketList :marketData="marketData"/>
    <MarketChart />
  </section>
</template>

<script>
import MarketFilter from './Market/MarketFilter.vue'
import MarketSearch from './Market/MarketSearch.vue'
import MarketList from './Market/MarketList.vue'
import MarketChart from './Market/MarketChart.vue'

export default {
//  props: {
//    car: Object,
//  },
  components: {
    MarketFilter,
    MarketSearch,
    MarketList,
    MarketChart
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    filterOptions(){
      return this.$store.getters.filterOptions
    },
    filterDates(){
      return this.$store.getters.filterDates
    },
    marketData(){
      return this.$store.getters.marketData
    },
  },
}
</script>