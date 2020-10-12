import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api/api'
import playlists from './modules/playlists'
import songs from './modules/songs'
import song from './modules/song'
import playlistsSongs from './modules/playlistsSongs'
import favorite from './modules/favorite'
import follow from './modules/follow'
import stream from './modules/stream'
import user from './modules/user'


Vue.use(Vuex)


export const store = new Vuex.Store({
  modules:{
    playlists,
    songs,
    playlistsSongs,
    song,
    favorite,
    follow,
    stream,
    user
  }
})
