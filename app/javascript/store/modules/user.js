import axios from 'axios';
import Api from '../../api/api';
import { mapState, mapGetters, mapActions } from 'vuex'


const user= {
  namespaced: true,

  state: {
     User: []
  },

  mutations: {
    SAVE_USER(state, data) {
      state.User = data;
    },
  },

  getters:{
    user_id(state){
      return state.User.user_id;
    },
    user_name(state){
      console.log(state.User)
      return state.User.display_name;
    }
  },

  actions: {

    async loadUser({commit}) {
      let response = await Api().get('/api/v1/users.json');
      commit('SAVE_USER', response.data)
    },


  }

}


export default user
