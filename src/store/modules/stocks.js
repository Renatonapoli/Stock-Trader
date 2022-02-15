import stocks from "../../data/stocks";

export default {
  stocks: [],

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
  },
  actions: {
    byStocks({ commit }, order) {
      commit("byStocks", order);
    },
    initStocks({ commit }) {
      commit("setStocks", stocks);
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
