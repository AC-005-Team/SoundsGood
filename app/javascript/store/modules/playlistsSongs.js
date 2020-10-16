import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'
import Rails from "@rails/ujs"


const playlistsSongs = {
  namespaced: true,

  state: {
     ListSongs: [],
     Added: false,

  },

  mutations: {
    SAVE_LIST(state, data) {
      state.ListSongs = data;
    },
    REMOVE(state,data) {
      let id = data
      let foundValue = state.ListSongs.audio.find(obj => obj.id === id);
      let i = state.ListSongs.audio.indexOf(foundValue)
      state.ListSongs.audio.splice(i, 1);
    },
    TOGGLE(state,data){
      state.Added = data
    },
    LOAD_STATUS(state,data){
      state.Added = data
    },
  },

  getters:{
    listsongs(state){
      return state.ListSongs;
    },
    added(state){
      return state.Added;
    },
  },

  actions: {
    async loadList({commit}, id ) {
      let response = await Api().get(`/api/v1/playlists/${id}`);
      commit('SAVE_LIST', response.data)
    },
    async remove({commit}, id ) {
      commit('REMOVE', id)
      // let response = await Api().get(`/api/v1/playlists/${id}`);
    },

    async toggleList({commit}, payload) {

      Rails.ajax({
        url: `/songs/${payload.id}/add_to_playlist?playlist_id=${payload.playlist_id}.json`,
        type: 'post',
        success: (result) => {commit('TOGGLE',result.status)}

      })
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
