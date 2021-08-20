import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isChecked: true
  },
  mutations: {
    toggleChecked (state) {
      state.isChecked = true
    },
    toggleNonChecked (state) {
      state.isChecked = false
    }
  },
  actions: {
  },
  modules: {
  }
})
