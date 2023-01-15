import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trResults:{ tras:[] },
    curTid:'',
  },
  getters: {
    getCounts:state => {
      return state.trResults.tras.length;
    },
    tras:state => {
      if(state.trResults.tras!=undefined)
        return state.trResults.tras;
      else
        return [];
    },
    // 현재 상세페이지에 열린 거래내역
    curTid:state=> {
      return state.curTid;
    },
    curTra:state => {
      return state.trResults.tras.find(tra=>tra.tid==state.curTid);
    }
  },
  mutations: {
    setCurTid(state,payload) {
      state.curTid = payload; // tid
    },
    setTrResults(state,payload) {
      state.trResults = payload; 
    }
  },
  actions: {
    loadTransactions({commit},payload) {
      commit('setTrResults',payload);
    }
  },
  modules: {
  }
})
