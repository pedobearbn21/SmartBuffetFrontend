import { createStore } from 'vuex';

export default createStore({
  state: {
    pad:1,
    year:1981
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit('setYear', year);
    }
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    }
  }
});