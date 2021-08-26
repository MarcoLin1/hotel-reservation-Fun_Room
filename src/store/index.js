import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isChecked: true,
    orderViewIsChecked: false,
    showContent: true,
    isCompleted: false,
    isFinished: true,
    bookingData: {
      name: '',
      email: '',
      phone: '',
      checkinDate: '',
      checkoutDate: '',
      countDate: 0,
      totalPrice: 0,
      roomType: ''
    }
    // roomDetail: {
    //   name: '',
    //   email: '',
    //   phone: '',
    //   checkinDate: '',
    //   checkoutDate: ''
    // }
  },
  mutations: {
    toggleChecked (state) {
      state.isChecked = true
    },
    toggleNonChecked (state) {
      state.isChecked = false
    },
    toggleOrderView (state, data) {
      state.orderViewIsChecked = true
      state.showContent = false
      // state.roomDetail = data
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
    },
    afterBookingData (state, data) {
      state.bookingData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
