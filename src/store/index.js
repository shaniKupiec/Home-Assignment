import { createStore } from 'vuex'
import marketModules from './modules/market-module.js'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    userMsg: '',
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    userMsg(state) {
      return state.userMsg
    },
  },
  mutations: {
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
    setUserMsg(state, { userMsg }) {
      state.userMsg = userMsg
    },
  },
  actions: {},
  modules: {
    marketModules,
  },
})

