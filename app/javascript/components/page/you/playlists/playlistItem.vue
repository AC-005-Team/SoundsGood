<template>
<div @click='yourClickHandler'>
<div class="my-2 mr-2 flex sm:flex-col justify-between flex-row">
<div class="align-top w-32 h-32  overflow-hidden rounded"  :style="{ 'background-image': 'url('+  url + ')' }">
<img class="h-32 max-w-xl mr-4" :src="url">
</div>
<div class="text-2xl sm:text-sm hover:bg-gray-200 rounded" >
<li>{{playlist.name}}</li>
<li>{{playlist.intro}}</li>
</div>
</div>



  <button @click="playThelist" :id="playlist.id" :class="">play ▶</button>
  <router-link :to="`/playlist/${playlist.id}`">show playlist</router-link>
  <div class="dropdown">
    <button class="dropbtn" @click="toggle">+</button>
    <div id="myDropdown" class='dropdown-content ' :class=" [isActive? 'show' : '']" >
      <a>add to play next</a>
      <a>add to playlist</a>
    </div>
  </div>
</div>



</template>

<script type="text/javascript">
import axios from 'axios';
import Api from '../../../../api/api'
import { mapState, mapGetters, mapActions } from 'vuex'

export default{
  data(){
  return {
    isActive: false,
    track_id: this.playlist.id,
    url: ''

  }
},
  name: 'playlistItem',
  props: ['playlist'],

  computed: {
    ...mapGetters({
        playerTracks: 'songs/playerTracks',
        playlistTracks:'playlistsSongs/listsongs'
     }),

  },
  ...mapActions('playlistsSongs', ['loadList']),
  created(){
    const axios = require('axios').create({
      baseURL: 'http://127.0.0.1:3000'
    });
    axios
      .get(`/api/v1/playlists/${this.track_id}`)
      .then(response => (this.url = response.data.first_cover))
      .catch(function(error) {
        console.log( 'playlist has no image'  );
      });


  },

  methods: {
       ...mapActions('songs', [ 'play','pause']),
       ...mapActions('playlists', ['loadSongs']),
       ...mapActions('playlistsSogns', ['loadList']),
    playThelist(){
      if(this.playerTracks.id !== this.playlist.id || !this.playerTracks ){
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('playlists/loadSongs', this.playlist.id)
      }else{
        this.$store.dispatch('songs/pause')
      }
    },
    toggle(){
      return this.isActive = !this.isActive
    },
    yourClickHandler(){
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }

    }



  },

}

</script>

<style lang="css" scoped>
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 3px 3px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}
.dropbtn:hover, .dropbtn:focus {
  background-color: #18689d;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: 20px;
  top:0;
  background-color: rgba(#f1f1f1, 0.55);
  min-width: 150px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  display: block;
}
.dropdown a:hover {background-color: #f0c543;}
.show {display: block;}

</style>
