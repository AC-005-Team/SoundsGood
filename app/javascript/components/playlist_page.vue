<template>
  <div>
    <router-link to="/playlists">back to playlists</router-link>
    <ol v-for="(song, index) in songs" :key="index" >
      <img :src="song.cover ">
      <li>name: {{ song.name }} artist: {{ song.artist }} </li>
      <button> play ▶  </button>
    </ol>
  </div>
</template>

<script>
export default {
  data(){
  return{ songs:[]};
  },
  props:['id'],
  created: function () {
  const axios = require('axios').create({
  baseURL: 'http://127.0.0.1:3000'
  });
  axios
    .get(`/api/v1/playlists/${this.id}`)
    .then(response => (this.songs = response.data))
    .catch(function (error) {
      console.log(error);
    });

}

}
</script>

<style lang="css" scoped>
</style>
