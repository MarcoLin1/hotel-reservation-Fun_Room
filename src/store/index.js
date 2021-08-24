import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isChecked: true,
    orderViewIsChecked: false,
    showContent: true,
    isCompleted: false,
    isFinished: true
  },
  mutations: {
    toggleChecked (state) {
      state.isChecked = true
    },
    toggleNonChecked (state) {
      state.isChecked = false
    },
    toggleOrderView (state) {
      state.orderViewIsChecked = true
      state.showContent = false
    },
    toggleOrderNonView (state) {
      state.orderViewIsChecked = false
      state.showContent = true
    },
    toggleToComplete (state) {
      state.isFinished = false
      state.isCompleted = true
    },
    toggleToUncompleted (state) {
      state.isFinished = true
      state.isCompleted = false
    }

  },
  actions: {
  },
  modules: {
  }
})
