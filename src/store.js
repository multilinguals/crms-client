import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING: (state, status) =>  {
      state.loading = status
    }
  },
  actions: {
    openLoading({ commit }) {
      commit('SET_LOADING', true)
    },
    closeLoading({ commit }) {
      commit('SET_LOADING', false)
    }
  }
})
