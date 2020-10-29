import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      is_logged: false
  },
  mutations: {
      setStatus(state, data) {
          state.is_logged = data
      }
  },
  actions: {
      saveStatus(context, data) {
          context.commit('setStatus', data)
      }
  },
  getters: {
      getStatus(state) {
          return state.is_logged
      }
  }
})
