import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLists: []
  },
  mutations: {
    ADD_LIST_TASK (state, payload) {
      state.taskLists.push(payload)
    }
  },
  actions: {
    addListTask ({ commit }, payload) {
      commit('ADD_LIST_TASK', payload)
    }
  },
  modules: {
  }
})
