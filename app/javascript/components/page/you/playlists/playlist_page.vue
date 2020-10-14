<template>
<div @click="yourClickHandler">
  <div class="bg-cover bg-center  bg-opacity-50 h-60 pt-16 head">
    <div class=" mx-64  content-center">
    <div class="grid grid-cols-12">
      <div class="col-span-4 m-auto my-4 ">
        <img class="h-32 w-32 overflow-hidden bg-blue-300 sm:block hidden" :src="listsongs.first_cover">
      </div>
      <div class="col-span-8 m-4 flex flex-col justify-between">
      </div>
    </div>


      <div class="flex items-center ">
        <div class="">
          <svg class="svg-inline--fa fa-play fa-w-14 fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
            <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
          </svg><!-- <i class="fas fa-play fa-2x"></i> -->
        </div>
        <div class="">
          <router-link :to="{name: 'playlists'}">back to playlists</router-link>
        </div>
      </div>
      <div class="col-span-12 md:col-span-3 mx-auto">
        <img class="w-16 h-16 overflow-hidden bg-black rounded-full" :src="listsongs.playlist_user">
        <p class="">user_name</p>
        <p class="">follower</p>
      </div>

      </div>
  </div>





<div class="grid grid-cols-12 ">
  <div class="col-span-8 md:col-span-12">

    <div class="grid grid-cols-12 mx-8">
      <div class="col-span-12 md:col-span-8">
        <div class="my-4 border-b border-gray-200"  >

              <list_songs v-for="(song, index) in listsongs.audio" :key="index" :song="song"  />


      </div>

    </div>
  </div>




  <div>


  </div>
</div>


</div>
</div>

</template>

<script>
import Api from '../../../../api/api'
import list_songs from './list_songs'
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  data() {
    return {
      isActive: false,
      playBtn: false
    }
  },
  components:{
    list_songs
  },
  // props: ['id'],

  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs',
      playerTracks: 'songs/playerTracks',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),
    playing() {
      var id = event.target.getAttribute('song-id');
      if (this.playerTracks.id === id) {
        if (this.isPLAY === false) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    },




  },

  ...mapActions('playlistsSongs', ['loadList', 'loadSong']),
  ...mapActions('songs', ['play', 'pause']),
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
    mouseOver: function() {
      if(this.isPlay === true){
        this.playBtn = false;
      }else{
        this.playBtn = true;
      }
    },

    mouseLeave: function() {
      this.playBtn = false;
    },

    playTheSong() {
      var id = event.target.getAttribute('song-id');
      console.log(id);
      if (this.playerTracks.song_id === Number(id)) {
        this.$store.dispatch('songs/pause')
      } else {
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
.head {
background-size:     cover;
background-image: url(/img/5497.jpg);
filter: grayscale(1);
background-position: center;
animation: shrink 5s infinite alternate;
}
/* @keyframes shrink {
  0% {
    background-size: 130% 130%;
  }
  100% {
    background-size: 150% 150%;
  }
} */
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

.list-bg{
  background-color: #37353e;
}
i.fas{
  color: rgb(255, 60, 60);
}


</style>
