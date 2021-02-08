import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLists: ['task1']
  },
  mutations: {
    ADD_TO_DO_LISTS (state, payload) {
      state.taskLists.push(payload)
    }
  },
  actions: {
    addToDoLists ({ commit }, payload) {
      commit('ADD_TO_DO_LISTS', payload)
    }
  },
  modules: {
  }
})
