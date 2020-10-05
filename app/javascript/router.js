import Vue from 'vue'
import VueRouter from 'vue-router'
import playlist_page from './components/page/you/playlists/playlist_page';
import discover from './components/page/discover';
import you from './components/page/you/you';
import stream from './components/page/stream';
import upload from './components/page/upload';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // {
    //   path: '/playlists',
    //   name: 'playlist',
    //   component: playlist
    // },
    {
      path: '/discover',
      name: 'discover',
      component: () => import(/* webpackChunkName: "Discover" */ './components/page/discover'),
    },
    {
      path: '/stream',
      name: 'stream',
      component: stream

      // component: () => import(/* webpackChunkName: "Stream" */ './components/page/stream'),

    },
    {
      path: '/you',
      name: 'you',
      component: () => import(/* webpackChunkName: "You" */ './components/page/you/you'),
      children:[
        {
          path:'library',
          name:'library',
          component: () => import(/* webpackChunkName: "Library" */ './components/page/you/library'),
        },
        {
          path:'likes',
          name:'likes',
          component: () => import(/* webpackChunkName: "Likes" */ './components/page/you/likes'),
        },
        {
          path:'set',
          name:'playlists',
          component: () => import(/* webpackChunkName: "Playlists" */ './components/page/you/playlists/playlists'),
        },
        {
          path: '/playlist/:id',
          component: 'playlist_page',
          props: true,
          component: () => import(/* webpackChunkName: "Playlist_page" */ './components/page/you/playlists/playlist_page'),
        },
        {
          path:'following',
          name:'following',
          component: () => import(/* webpackChunkName: "Library" */ './components/page/you/following'),
        },

      ]


    },
    {
      path: 'upload/users/:id',
      component: upload,
      name: 'upload',
      props: true,
    },


]
})
