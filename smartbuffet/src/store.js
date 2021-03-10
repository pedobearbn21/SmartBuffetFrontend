import { createStore } from 'vuex';

export default createStore({
  state: {
    pad:1,
    year:1981,
    meat_list: [],
    bucket_meat: []
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit('setYear', year);
    },
    onSetBucket: ({commit}, list)=>{
      commit('setBucket', list);
    }
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    },
    setBucket: (state, list) => {
      state.bucket_meat = list
    }
  }
});