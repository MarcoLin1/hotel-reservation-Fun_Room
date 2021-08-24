import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isChecked: true,
    orderViewIsChecked: false,
    showContent: false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
