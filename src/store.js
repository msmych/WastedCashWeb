import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    apiToken: null,
    user: {}
  },
  getters: {
    apiToken(state) {
      return state.apiToken;
    }
  },
  mutations: {
    setApiToken(state, payload) {
      state.apiToken = payload.apiToken;
      state.user.id = payload.userId
    }
  }
});
