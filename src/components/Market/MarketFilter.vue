<template>
  <section class="market-filter">
    <section class="market-filter__left">
      <div class="market-filter__left__selects">
        <select v-for="topic in filterOptions" :key="topic.name" v-model="selected[topic.name]">
          <option v-for="option in topic.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <div class="market-filter__left__btns">
        <div>placeholder</div>
        <div>placeholder</div>
      </div>
    </section>
    <div class="market-filter__right">
      <span>date</span>
      <img src="../../assets/images/date-icon.png" class="market-filter__right__img" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    filterOptions: Object,
    filter: Object,
  },
  components: {},
  data() {
    return {
      selected: {},
    };
  },
  created() {
    this.selected = JSON.parse(JSON.stringify(this.filter));
  },
  methods: {
  },
  computed: {
  },
  watch: {
    selected: {
      handler() {
        this.$emit("onFilter", JSON.parse(JSON.stringify(this.selected)));
      },
      deep: true,
    },
  },
  emits: ['onFilter']
};
</script>
