import Vue from 'vue'
import VueRouter from 'vue-router'
import playlist from './components/playlist';
import playlist_page from './components/playlist_page';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/playlists',
      component: playlist
    },
    {
      path: '/playlist/:id',
      component: playlist_page,
      props: true,

    }

]
})
