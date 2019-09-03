import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    apiToken: null,
    user: {
      id: "",
      totals: {}
    }
  },
  getters: {
    apiToken(state) {
      return state.apiToken;
    },
    userId(state) {
      return state.user.id;
    },
    userTotals(state) {
      return state.user.totals;
    }
  },
  mutations: {
    setApiToken(state, payload) {
      state.apiToken = payload.apiToken;
      state.user.id = payload.userId;
    },
    setUserTotal(state, totals) {
      const userTotals = {};
      totals.forEach(total => {
        if (userTotals[total.currency]) {
          userTotals[total.currency].push(total.amount);
        } else {
          userTotals[total.currency] = [total.amount];
        }
      });
      state.user.totals = userTotals;
    }
  }
});
