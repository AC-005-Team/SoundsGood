<template>
<div>

  <div class="bg-gray-900 text-white text-base m-4 border-b border-gray-600">
    <span class="text-sm bg-leego_orange border border-leego_orange px-2">checkout the playlists you create</span>
    <div class="flex overflow-x-scroll gap-6">
      <playlistItem v-for="playlist in playlists" :playlist="playlist" ></playlistItem>
    </div>

  </div>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import Api from '../../../../api/api'
import { mapState, mapGetters, mapActions } from 'vuex'
import playlistItem from './playlistItem'

export default {
  name: 'playlist',
  data() {
    return {
      playlists: [],

    };
  },
  computed: {
    ...mapGetters({
        playerTracks: 'songs/playerTracks',
        playlistTracks:'playlistsSongs/listsongs'
     }),

  },
  ...mapActions('playlistsSongs', ['loadList']),


  mounted() {
  Api().get('/api/v1/playlists')
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
