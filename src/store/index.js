import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTaskForm: false,
    taskList: ['task1', 'task2']
  },
  mutations: {
    SHOW_FORM (state) {
      state.showTaskForm = true
    },
    ADD_TASK (state, payload) {
      state.taskList.push(payload)
    }
  },
  actions: {
    showForm ({ commit }) {
      commit('SHOW_FORM')
    },
    addTask ({ commit }, payload) {
      commit('ADD_TASK', payload)
    }
  },
  modules: {
  }
})
