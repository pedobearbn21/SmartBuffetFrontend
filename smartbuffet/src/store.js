import { createStore } from 'vuex';

export default createStore({
  state: {
    pad:1,
    year:1981,
    meat_list: [],
    bucket_meat: [],
    table_id: 0,
    table_stable_id: 0
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit('setYear', year);
    },
    onSetMeatList: ({ commit }, list)=>{
      commit('setMeatList', list);
    },
    onSetBucket: ({commit}, list)=>{
      commit('setBucket', list);
    },
    onSetTableId: ({commit}, id) => {
      commit('setTableId', id );
    },
    onSetTableStableId: ({commit}, id) => {
      commit('setTableStableId', id);
    }
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    },
    setMeatList: (state, list)=>{
      state.meat_list = list
    },
    setBucket: (state, list) => {
      state.bucket_meat = list
    },
    setTableId: (state, id )=> {
      state.table_id = id
    },
    setTableStableId:(state, id) => {
      state.table_stable_id = id
    }
  }
});