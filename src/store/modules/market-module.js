import { marketDataService } from "@/service/market-data.service";

export default {
  state: {
    marketData: _makeRandomData(30),
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
    filterDates: [1657706016666, 1657706016666],
    filter: { audience: "audience (All)", companies: "companies (All)", regions: "regions (All)", topics: "topics (All)", verticals: "verticals (All)" },
    searchBtns: ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4'],
    search: ''
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
    filter(state) {
      return state.filter;
    },
    searchBtns(state) {
      return state.searchBtns;
    },
    search(state) {
      return state.search;
    },
  },
  mutations: {
    setFilter(state, { filter }) {
      state.filter = filter;
    },
    setMarketData(state, { marketData }) {
      state.filter = marketData;
    },
    setSearch(state, { search }) {
      state.search = search;
    },
  },
  actions: {
    async loadMarketData({ commit, state }) {
      try {
        // const marketData = marketDataService.query(state.filter, state.search);
        // await commit({ type: "setMarketData", marketData });
      } catch (err) {
        console.error("Cannot loadMarketData", err);
        throw err;
      }
    },
    async setFilter({ commit, dispatch }, { filter }) {
      try {
        commit({ type: "setFilter", filter });
        dispatch({ type: "loadMarketData" })
      } catch (err) {
        console.error("Cannot setFilter", err);
        throw err;
      }
    },
    async setSearch({ commit, dispatch }, { search }) {
      try {
        console.log('setSearch', search);
        commit({ type: "setSearch", search });
        dispatch({ type: "loadMarketData" })
      } catch (err) {
        console.error("Cannot setSearch", err);
        throw err;
      }
    },
  },
};

function _makeId(length = 5) {
  var txt = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function _getRandomInt(min = 0, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function _makeRandomData(x) {
  var data = [];
  for (let index = 0; index < x; index++) {
    data.push({
      id: _makeId(),
      title: "placeholder",
      number: _getRandomInt(),
    });
  }
  return data;
}
