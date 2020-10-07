<template>
<!-- <div @click="yourClickHandler"> -->
  <!-- <router-link to="/playlists">back to playlists</router-link> -->
  <!-- <h1>{{listsongs.name}}</h1>
  <div v-for="(song, index) in listsongs.audio" :key="index">
    <img :src="song.cover">
    <li>name: {{ song.name }} artist: {{ song.artist }}  </li>
    <button :song-id="song.id" @click="playTheSong">play ▶</button>
    <div class="dropdown">
      <button class="dropbtn" @click="toggle">+</button>
      <div class="">
        <div id="myDropdown" class='dropdown-content ' :class=" [isActive? 'show' : '']" >
        <a>add to play next</a>
        <a>add to playlist</a>
      </div>
      </div>
    </div>
  </div> -->

<!-- </div> -->



<div >





</div>




</template>

<script>
import Api from '../../../../api/api'

import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  data(){
  return {
    isActive: false,
  }
},
  // props: ['id'],

  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs'
    }),
    ...mapGetters({
        playerTracks: 'songs/playerTracks'
     })



  },

  ...mapActions('playlistsSongs', ['loadList','loadSong']),
  ...mapActions('songs', [ 'play','pause']),
 created() {
    console.log("create", this.$route.params.id)
    this.$store.dispatch('playlistsSongs/loadList', this.$route.params.id)
  },
  methods: {
    toggle() {
      return this.isActive = !this.isActive
    },
    yourClickHandler() {
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }
    },
    playTheSong(){
      var id = event.target.getAttribute('song-id');
      console.log(id);
      if(this.playerTracks.song_id === Number(id) ){
        this.$store.dispatch('songs/pause')
      }else{
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('playlistsSongs/loadSong', id)
        console.log('done');
        console.log(this.playerTracks.song_id);
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
