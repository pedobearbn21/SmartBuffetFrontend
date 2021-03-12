import { createStore } from 'vuex';

export default createStore({
  state: {
    pad:1,
    year:1981,
    meat_list: [],
    bucket_meat: [],
    table_id: 0
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit('setYear', year);
    },
    onSetBucket: ({commit}, list)=>{
      commit('setBucket', list);
    },
    onSetTableId: ({commit}, id) => {
      commit('setTableId', id );
    }
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    },
    setBucket: (state, list) => {
      state.bucket_meat = list
    },
    setTableId: (state, id )=> {
      state.table_id = id
    }
  }
});