import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'
import Rails from "@rails/ujs"


const favorite = {
  namespaced: true,

  state: {
     LikeSongs: [],
     Like: false,

  },

  mutations: {
    SAVE_LIST(state, data) {
      state.LikeSongs = data;
    },
    TOGGLE(state,data){
      state.Like = data
    },
    LOAD_STATUS(state,data){
      state.Like = data
    },
  },

  getters:{
    likesongs(state){
      return state.LikeSongs;
    },
    like(state){
      return state.Like;
    },
  },

  actions: {

    async loadLikes({commit}) {
      let response = await Api().get(`/api/v1/songs`);
      commit('LOAD_STATUS', response.data)
    },

    ...mapActions('song', ['updateStates']),

    async toggleLike({commit,dispatch}, payload ) {

      Rails.ajax({
        url: `/songs/${payload.id}/like.json`,
        type: 'post',
        success: (result) => { commit('TOGGLE', result.status);
        dispatch( 'song/updateStates', payload , {root:true} ) //塞到module tracks方法
       }

       })


    }

  }

}


export default favorite
