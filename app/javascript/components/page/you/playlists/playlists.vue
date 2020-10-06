<template>
<div>

  <div class="col-span-9 bg-white">
    <div class="mx-4 p-5">

      <div class="flex justify-between text-lg text-gray-500">
        <div class="">Hear the playlists you’ve liked:</div>
        <div class="flex w-1/3">
          <input class="mx-2 border border-gray-200 rounded w-3/4" type="text" placeholder="Fillter">
          <button class="border border-orange-600 text-orange-600 w-1/4 flex justify-between items-center px-2">
            <p>All</p>
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>

      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <playlistItem v-for="playlist in playlists" :playlist="playlist" ></playlistItem>
      </div>

    </div>
    <div class="flex border-t border-gray-500 mx-4">
      <div class="my-3 text-xs table-row-group">

        <div class="text-gray-500">
          <span class="hover:text-black"><a href="#">Legal</a></span>
          -
          <span class="hover:text-black"><a href="#">Privacy</a></span>
          -
          <span class="hover:text-black"><a href="#">Cookies</a></span>
          -
          <span class="hover:text-black"><a href="#">Imprint</a></span>
          -
          <span class="hover:text-black"><a href="#">Creator Resources</a></span>
          -
          <span class="hover:text-black"><a href="#">Blog</a></span>
          -
          <span class="hover:text-black"><a href="#">Charts</a></span>
          -
          <span class="hover:text-black"><a href="#">Popular Search</a></span>
        </div>

        <div class="mt-2 mb-20">
          Language: English (US)
        </div>

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
