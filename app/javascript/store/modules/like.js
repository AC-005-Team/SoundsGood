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
      return state.Added;
    },
  },

  actions: {
    async loadList({commit}, id ) {
      let response = await Api().get(`/api/v1/playlists/${id}`);
      commit('SAVE_LIST', response.data)
    },
    // async loadStatus({commit}, id ) {
    //   let response = await Api().get(`/api/v1/songs/${id}`);
    //   commit('LOAD_STATUS', response.data)
    // },
    async toggleLike({commit}, payload ) {
      // let response = await Api().post(`/songs/${id}/like.json`);
      // commit('TOGGLE', response.data)
      Rails.ajax({
        url: `/songs/${id}/like.json`,
        type: 'post',
        success: (result) => {commit('TOGGLE',result.status)
      }

        // error: (err) => {
        //   console.log(err);
        // },
      })
    },

    // ...mapActions('songs', ['setPlayerTracks','play']),
    // async loadSong({dispatch}, id){
    //   let response = await Api().get(`/api/v1/songs/${id}`);
    //   dispatch('songs/setPlayerTracks', response.data, {root:true}); //塞到module tracks方法
    //   dispatch('songs/play',response.data,  {root:true});

      // commit('SAVE_LIST', response.data)

    }

}

export default favorite
