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
    })
  }
  return data
}
