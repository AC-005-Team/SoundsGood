<template>
<div>

  <div class="col-span-9 bg-white">

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
