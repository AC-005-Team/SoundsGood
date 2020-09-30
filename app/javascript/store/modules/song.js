import Api from "../../api/api";
import axios from 'axios';
import { mapState, mapGetters, mapActions } from "vuex";

const song = {
  namespaced: true,

  state: {
    Song: {},
    Index: {}
  },

  mutations: {
    SAVE_SONG(state, data) {
      state.Song = data;
    },
    LOAD_INDEX(state, data){
      state.Index = data;
    }
  },

  getters: {
    song(state) {
      return state.Song;
    },
    index(state){
      return state.Index;
    }
  },

  actions: {

    ...mapActions("songs", ["setPlayerTracks", "play"]),
    async loadIndex({ commit }, id) {
      let response = await Api().get(`/api/v1/songs`);
      // dispatch("songs/setPlayerTracks", response.data, { root: true }); //塞到module tracks方法
      // dispatch("songs/play", response.data, { root: true });
      commit("LOAD_INDEX", response.data);
    },

    async loadSong({ commit }, id) {
      let response = await Api().get(`/api/v1/songs/${id}`);
      // dispatch("songs/setPlayerTracks", response.data, { root: true }); //塞到module tracks方法
      // dispatch("songs/play", response.data, { root: true });

      commit("SAVE_SONG", response.data);

    },
  },
};

export default song;
