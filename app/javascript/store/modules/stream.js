import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'
import Rails from "@rails/ujs"


const stream = {
  namespaced: true,

  state: {
     Stream: [],

  },

  mutations: {
    SAVE_STRAM(state, data) {
      state.Stream = data;
    },
  },

  getters:{
    stream(state){
      return state.Stream;
    },
  },

  actions: {

    async loadStream({commit}) {
      let response = await Api().get(`/stream.json`);
      commit('SAVE_STRAM', response.data)
    },


  }

}


export default stream
