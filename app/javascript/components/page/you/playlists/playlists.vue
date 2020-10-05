<template>
<div>
  <playlistItem v-for="playlist in playlists" :playlist="playlist"></playlistItem>
</div>


</template>

<script>
import axios from 'axios';
import playlistItem from './playlistItem'
export default {
  name: 'playlist',
  data() {
    return {
      playlists: []
    };
  },
  mounted() {
    const axios = require('axios').create({
      baseURL: 'http://127.0.0.1:3000'
    });
    axios
      .get('/api/v1/playlists')
      .then(response => (this.playlists = response.data))
      .catch(function(error) {
        console.log(error);
      });

  },
  components: {
    playlistItem
  }

}
</script>

<style lang="css" scoped>
</style>
