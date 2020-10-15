<template>
<div>

  <div class="col-span-9 text-base text-gray-600 m-4">

      <div class="grid grid-cols-12 gap-4 overflow-x-scroll">
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
