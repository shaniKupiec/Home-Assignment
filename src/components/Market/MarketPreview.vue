<template>
  <li class="market-preview">
    <div class="market-preview__left">
      <div class="market-preview__left__number">{{ marketInfo.number }}</div>
      <div class="market-preview__left__block"></div>
      <div class="market-preview__left__title">{{ marketInfo.title }}</div>
    </div>
    <img src="../../assets/images/links.png" class="market-preview__right" alt="" />
  </li>
</template>

<script>
export default {
  props: {
    marketInfo: Object,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
