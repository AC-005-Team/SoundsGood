import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'
import Rails from "@rails/ujs"


const follow = {
  namespaced: true,


  state: {
     followees: [],
     following: false,
     unfollow:[]


  },

  mutations: {

    FOLLOW(state,data){
      let id = data
      let foundValue = state.unfollow.find(obj => obj.user_id === id);
      let i = state.unfollow.indexOf(foundValue)
      state.unfollow.splice(i, 1);
    },

    LOAD_FOLLOWEES(state,data){
      state.followees = data
    },
    FIND_FOLLOWERS(state,data){
      state.unfollow = data
    },

    UNFOLLOW(state,data) {
      let id = data
      let foundValue = state.followees.find(obj => obj.id === id);
      let i = state.followees.indexOf(foundValue)
      state.followees.splice(i, 1);

    }
  },

  getters:{
    followees(state){
      return state.followees;
    },
    following(state){
      return state.following;
    },
    unfollowers(state){
      return state.unfollow
    }
  },

  actions: {
    async loadFollowees({commit}) {
      let response = await Api().get(`/api/v1/library/following`);
      commit('LOAD_FOLLOWEES', response.data)
    },

    async loadUNFollow({commit}) {
      let response = await Api().get(`api/v1/users/unfollow`);
      commit('FIND_FOLLOWERS', response.data)
    },


    addFollow({commit}, payload) {
      Rails.ajax({
        url: `/users/${payload}/follow`,
        type: 'post',
        success: (result) => { commit('FOLLOW', payload);
             }
       })
    },

    async unFollow({commit}, payload) {
      Rails.ajax({
        url: `/users/${payload}/follow`,
        type: 'post',
        success: (result) => { commit('UNFOLLOW', payload);
             }
       })


    }

  }

}


export default follow
