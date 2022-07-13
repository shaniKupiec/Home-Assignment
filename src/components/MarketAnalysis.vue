<template>
  <section>
    <MarketFilter />
    <MarketSearch />
    <MarketList />
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
  computed: {},
}
</script>