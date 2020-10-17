import Api from "../../api/api";
import axios from 'axios';
import { mapState, mapGetters, mapActions } from "vuex";

const song = {
  namespaced: true,

  state: {
    Song: {},
    Index: {},
    Tag_1: {},
    Top_5:{},
    LikesTracks :{}
  },

  mutations: {
    SAVE_SONG(state, data) {
      state.Song = data;
    },
    LOAD_INDEX(state, data){
      state.Index = data;
    },
    LOAD_Tag_1(state, data){
      state.Tag_1 = data;
    },
    LOAD_TOP_5(state, data){
      state.Top_5 = data;
    },
    FIND_INDEX(state, data){
      //只更新找到位置陣列的部分
      let y = data.id
      var foundValueTag = state.Tag_1.find(obj => obj.song_id === y);
      var foundValue = state.Index.find(obj => obj.song_id === y);
      let a = state.Index.indexOf(foundValue)
      let b = state.Tag_1.indexOf(foundValueTag)
      state.Index[a].likes = !state.Index[a].likes
      state.Tag_1[b].likes = !state.Tag_1[b].likes

    },
    LOAD_LIKES(state, data){
      state.LikesTracks = data
    }

  },

  getters: {
    song(state) {
      return state.Song;
    },
    index(state){
      return state.Index;
    },
    tag_1(state){
      return state.Tag_1;
    },
    top_5(state){
      return state.Top_5;
    },
    like_songs(state){
      return state.LikesTracks
    }

  },

  actions: {

    ...mapActions("songs", ["setPlayerTracks", "play"]),
    async loadIndex({ commit }) {
      let response = await Api().get(`/api/v1/songs`);
      // dispatch("songs/setPlayerTracks", response.data, { root: true }); //塞到module tracks方法
      // dispatch("songs/play", response.data, { root: true });
      commit("LOAD_INDEX", response.data.index);
      commit("LOAD_Tag_1", response.data.tag1);
      commit("LOAD_TOP_5", response.data.top_songs);
    },


    updateStates({ commit }, payload){
      commit('FIND_INDEX', payload)
    },

    async loadlikeSongs({ commit }) {
      let response = await Api().get('/api/v1/library/likes.json');
      commit("LOAD_LIKES", response.data);
    },



    async loadSong({commit,dispatch}, id) {
      let response = await Api().get(`/api/v1/songs/${id}`);
      dispatch("songs/setPlayerTracks", response.data, { root: true }); //塞到module tracks方法
      dispatch("songs/play", response.data, { root: true });

      commit("SAVE_SONG", response.data);

    },
  },
};

export default song;
