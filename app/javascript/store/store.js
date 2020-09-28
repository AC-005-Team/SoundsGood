import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api/api'
import playlists from './modules/playlists'
import songs from './modules/songs'
import playlistsSongs from './modules/playlistsSongs'


Vue.use(Vuex)


export const store = new Vuex.Store({
  modules:{
    playlists,
    songs,
    playlistsSongs
  }
})
