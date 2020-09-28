import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'


const playlists = {
  namespaced: true,
  state: {
    // playlist: []
  },
  mutations: {
    // SET_PLAYLIST(state, data) {
    //   state.playlist = data;
    // }
  },
  getter:{
    // playlist(state){
    //   return state.playlist;
    // }
  },
  actions: {
      ...mapActions('songs', ['setPlayerTracks','play']),
    async loadSongs({dispatch, commit}, id ) {
      let response = await Api().get(`/api/v1/playlists/${id}`);
      // commit('SET_PLAYLIST', response.data); //塞到state
      dispatch('songs/setPlayerTracks', response.data, {root:true}); //塞到module tracks方法
      dispatch('songs/play',response.data,  {root:true});
    }
 }
}



export default playlists
