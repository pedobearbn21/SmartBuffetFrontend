import { createStore } from 'vuex';
import axios from './plugins/Axios'
export default createStore({
  state: {
    user: '',
    pad:1,
    year:1981,
    meat_list: [],
    bucket_meat: [],
    table_id: 0,
    table_stable_id: 0
  },
  actions: {
    onSetUser:({ commit }, name) => {
      commit('setUser', name)
    },
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
      
      axios.get('customer/tablestable/'+id)
        .then((res)=>{ 
          commit('setTableId',res.data.table_dialy.id)
          // this.$store.dispatch('onSetTableId',res.data.table_dialy.id) 
        })
        .catch((err)=>{console.log(err);})
      commit('setTableStableId', id);
    }
  },
  mutations: {
    setUser: (state, name) => {
      state.user = name
    },
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