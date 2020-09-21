import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state:{
    songs: ''
  },
  mutations: {
    playSong(state, songs){
      state.songs = songs
    }
  },
  getters: {
    songs: state => state.songs
  }
})
