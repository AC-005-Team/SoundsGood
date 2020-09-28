<template>
<div @click='yourClickHandler'>
  <li>playlist: {{ playlist.name }} </li>
  <button @click="playThelist" :id="playlist.id" :class="">play ▶</button>
  <router-link :to="`playlist/${playlist.id}`">show playlist</router-link>
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
import Api from '../api/api'
import { mapState, mapGetters, mapActions } from 'vuex'

export default{
  data(){
  return {
    isActive: false
  }
},
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
