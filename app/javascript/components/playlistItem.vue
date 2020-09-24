<template>
<div>
  <li>playlist: {{ playlist.name }} </li>
  <button @click="playThelist" :id="playlist.id" :class="">play ▶</button>
  <router-link :to="`playlist/${playlist.id}`">show playlist</router-link>
  <div class="dropdown">
    <button class="dropbtn">+</button>
    <div id="myDropdown" class="dropdown-content">
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import axios from 'axios';
import Api from '../api/api'
import { mapState, mapGetters, mapActions } from 'vuex'

export default{
  name: 'playlistItem',
  props: ['playlist'],
  computed: {
    ...mapGetters({
        playerTracks: 'songs/playerTracks'
     })
  },

  methods: {
       ...mapActions('songs', [ 'play','pause']),
       ...mapActions('playlists', ['loadSongs']),
    playThelist(){
      if(this.playerTracks.id !== this.playlist.id || !this.playerTracks ){
        this.$store.dispatch('playlists/loadSongs', this.playlist.id)
        this.$store.dispatch('songs/play')
      }else{
        this.$store.dispatch('songs/pause')
      }
    },



  },

}

</script>

<style lang="css" scoped>

</style>
