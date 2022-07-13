<template>
  <section class="market-search">
    <div class="market-search__left">
      <span v-for="btn in searchBtns" :key="btn" :class="{ active: value === btn }" @click="value = btn">xxx</span>
    </div>
    <div class="market-search__right">
      <img src="../../assets/images/export.png" class="market-search__right__img" alt="" />
      <input type="text" v-model="search" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    searchBtns: Object,
  },
  components: {},
  data() {
    return {
      value: "",
      search: "",
    };
  },
  created() {
    this.value = this.searchBtns[0];
  },
  methods: {},
  computed: {},
  watch: {
    search: {
      handler() {
        this.$emit("onSearch", JSON.parse(JSON.stringify(this.search)));
      },
    },
  },
  emits: ["onSearch"],
};
</script>
