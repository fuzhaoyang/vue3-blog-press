import { createStore } from 'vuex'

export default createStore({
  state: {
    loading:true,
    scrollTop:0
  },
  mutations: {
    setLoading(state,pavload) {
      state.loading = pavload;
    },
    setScrollTop(state,pavload) {
      state.scrollTop = pavload;
    }
  },
  actions: {

  },
  modules: {

  },
  getters:{
    getLoading(state){
      return state.loading;
    },
    getScrollTop(state) {
      return state.scrollTop;
    }
  }
})
