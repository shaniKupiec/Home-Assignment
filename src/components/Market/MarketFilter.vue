<template>
  <section class="market-filter">
    <section class="market-filter__left">
      <div class="market-filter__left__selects">
        <select v-for="topic in filterOptions" :key="topic.name">
          <option v-for="option in topic.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <div class="market-filter__left__btns">
        <div>placeholder</div>
        <div>placeholder</div>
      </div>
    </section>
    <div class="market-filter__right">
      <!-- <span>{{ from }} -</span>
      <span>{{ to }}</span> ADD -->
      <span>date</span>
      <img src="../../assets/images/date-icon.png" class="market-filter__right__img" alt="" />
    </div>
  </section>
</template>

<script>
// import appHeader from './components/app-header.vue'

export default {
  props: {
    filterOptions: Object,
    filterDates: Object,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    from() {
      return new Date(this.filterDates[0]).toUTCString();
    },
    to() {
      return new Date(this.filterDates[1]).toUTCString();
    },
  },
};
</script>
