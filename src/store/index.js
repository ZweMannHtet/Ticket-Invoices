import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null,
    flashActive:null
  },
  getters: {
  },
  mutations: {
    TOGGLE_INVOICE(state){
      state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_FLASH(state){
      state.flashActive = !state.flashActive
    }
  },
  actions: {
  },
  modules: {
  }
})
