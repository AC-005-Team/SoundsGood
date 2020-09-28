import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'


const playlistsSongs = {
  namespaced: true,

  state: {
     ListSongs: {}
  },

  mutations: {
    SAVE_LIST(state, data) {
      state.ListSongs = data;
    }
  },

  getters:{
    listsongs(state){
      return state.ListSongs;
    }
  },

  actions: {
    async loadList({commit}, id ) {
      let response = await Api().get(`/api/v1/playlists/${id}`);
      commit('SAVE_LIST', response.data)
    },

    ...mapActions('songs', ['setPlayerTracks','play']),
    async loadSong({dispatch}, id){
      let response = await Api().get(`/api/v1/songs/${id}`);
      dispatch('songs/setPlayerTracks', response.data, {root:true}); //塞到module tracks方法
      dispatch('songs/play',response.data,  {root:true});

      // commit('SAVE_LIST', response.data)

    }
 }
}

export default playlistsSongs
