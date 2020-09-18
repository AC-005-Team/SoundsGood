<template>

<div>
  <li>playlist: {{ playlist.name }} </li>
  <button @click="playThelist" :id="playlist.id">play ▶</button>
  <router-link :to="`playlist/${playlist.id}`">show playlist</router-link>
</div>

</template>

<script>
import axios from 'axios';


export default{
  data(){
  return{ songs:[]};
  },
  name: 'playlistItem',
  props: ['playlist'],
  created: function () {
  const axios = require('axios').create({
  baseURL: 'http://127.0.0.1:3000'
  });
  axios
    .get(`/api/v1/playlists/${this.playlist.id}`)
    .then(response => (this.songs = response.data))
    .catch(function (error) {
      console.log(error);
    });

},

  methods: {
    playThelist: function () {
     console.log(this.playlist.id)
  },

}
}
</script>

<style lang="css" scoped>

</style>
