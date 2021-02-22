import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLists: [],
    todos: []
  },
  mutations: {
    ADD_TO_DO_LISTS (state, payload) {
      state.taskLists.push(payload)
    },
    ADD_TODOS (state, payload) {
      state.todos.push(payload)
    },
    REMOVE_TODOS (state) {
      state.todos.splice(state, 1)
    }
  },
  actions: {
    addToDoLists ({ commit }, payload) {
      commit('ADD_TO_DO_LISTS', payload)
    },
    addTasks ({ commit }, payload) {
      commit('ADD_TODOS', payload)
    },
    removeTodos ({ commit }, payload) {
      commit('REMOVE_TODOS', payload)
    }
  },
  modules: {
  }
})
