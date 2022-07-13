<template>
  <section>
    <div>
      <select v-for="topic in filterOptions" :key="topic.name">
        <option v-for="option in topic.options" :key="option" :value="option">{{ option }}</option>
      </select>
      <button>x</button>
      <button>x</button>
    </div>
    <div>
      <span>{{ from }} -</span>
      <span>{{ to }}</span>
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
