import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api/api'
import playlists from './modules/playlists'
import songs from './modules/songs'

Vue.use(Vuex)


export const store = new Vuex.Store({
  modules:{
    playlists,
    songs
  }
  // state:{
  //   // songs: []
  // },
  // mutations: {
  //   play(state, songs){
  //     state.songs = songs
  //   },
  //   // SetSongs(state, songs){
  //   //   state.songs = songs;
  //   // }
  // },
  // // actions:{
  // //   async loadSongs({commit}, id){
  // //       let response = await Api().get(`/api/v1/playlists/${id}`);
  // //       commit('SetSongs', response.data);
  // //   }
  // // },
  // getters: {
  //   playOrPause(state){
  //     return state.songs;
  //   }
  // }
})
