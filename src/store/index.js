/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    warningSeen: false
  },
  mutations: {
    SET_WARNING_SEEN(state, bool) {
      state.warningSeen = bool;
      console.log("IE Warning clicked.");
    }
  },
  actions: {
    async warningSeen({ commit }, bool) {
      commit("SET_WARNING_SEEN", bool);
    }
  },

  getters: {}
});
