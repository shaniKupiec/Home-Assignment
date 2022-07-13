export default {
  state: {
    marketData: [],
    filterOptions: [
      {
        name: "companies",
        options: ["companies (All)", "placeholder", "placeholder", "placeholder", "placeholder"],
      },
      {
        name: "topics",
        options: ["topics (All)", "placeholder", "placeholder", "placeholder", "placeholder"],
      },
      {
        name: "verticals",
        options: ["verticals (All)", "placeholder", "placeholder", "placeholder", "placeholder"],
      },
      {
        name: "audience",
        options: ["audience (All)", "placeholder", "placeholder", "placeholder", "placeholder"],
      },
      {
        name: "regions",
        options: ["regions (All)", "placeholder", "placeholder", "placeholder", "placeholder"],
      },
    ],
    filterDates: [1657706016666, 1657706016666]
  },
  getters: {
    marketData(state) {
      return JSON.parse(JSON.stringify(state.marketData));
    },
    filterOptions(state) {
      return state.filterOptions;
    },
    filterDates(state) {
      return state.filterDates;
    },
  },
  mutations: {},
  actions: {},
};
