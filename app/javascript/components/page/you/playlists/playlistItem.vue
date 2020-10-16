<template>
<div @click='yourClickHandler'>

  <div class="my-2 mr-2 flex-col justify-between bg-gray-900">

    <div class="align-top w-32 h-32 overflow-hidden rounded cover parent" :style="{ 'background-image': 'url('+  url + ')' }"
    @mouseover="mouseOver"  @mouseleave="mouseLeave" @click="playPause">
      <div class="child">
        <img class="object-cover h-32 max-w-xl w-full mr-4" :src="url">
        <i class="fas z-10 fa-pause" style="font-size: 60px" v-show="playing" />
        <i class="fas z-10 fa-play" style="font-size: 60px" v-show="playBtn && !playing" />
      </div>
    </div>
      <router-link :to="`/playlists/${playlist.id}`" :id="this.playlist.id" @click.native="$event.stopImmediatePropagation()">
    <div class="text-base sm:text-sm hover:bg-gray-800 rounded">
      <li>{{playlist.name}}</li>
      <li>{{playlist.intro}}</li>
    </div>
    </router-link>
  </div>

</div>
</template>

<script type="text/javascript">
import axios from 'axios';
import Api from '../../../../api/api'
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'

export default {
  data() {
    return {
      isActive: false,
      track_id: this.playlist.id,
      url: '',
      playBtn: false
    }
  },
  name: 'playlistItem',
  props: ['playlist'],

  computed: {
    ...mapGetters({
      playerTracks: 'songs/playerTracks',
      playlistTracks: 'playlistsSongs/listsongs',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),

    playing() {
      if (this.playerTracks.id === this.playlist.id) {
        if (this.isPLAY === false) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    },

  },

  ...mapActions('playlistsSongs', ['loadList']),
  created() {
    Api().get(`/api/v1/playlists/${this.track_id}`)
      .then(response => (this.url = response.data.first_cover))
      .catch(function(error) {
        console.log('playlist has no image');
      });


  },

  methods: {
    ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
    ...mapActions('playlists', ['loadSongs']),
    ...mapActions("favorite", ["toggleLike"]),



    playPause() {
      if (this.playerTracks.id !== this.playlist.id || !this.playerTracks) {
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('playlists/loadSongs', this.playlist.id)
      } else {
        if (this.isPLAY === true) {
          this.$store.dispatch("songs/pause");
          this.$store.dispatch("songs/continuePause");
        } else {
          this.$store.dispatch("songs/continuePlay");
          this.$store.dispatch("songs/play");
        }
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



    toggle() {
      return this.isActive = !this.isActive
    },
    yourClickHandler() {
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }

    }



  },

}
</script>

<style lang="css" scoped>


.parent {
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.fa-pause,
.fa-play {
  font-size: 65px;
  color: rgba(247, 66, 2, 1);
  text-shadow:2px 2px 4px #626262;
  position: absolute;
  margin: 0 auto;
  top: 35px;
  left: 37px;
}

.child {
    height: 100%;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.parent:hover .child:before, .parent:focus .child:before {
    display: block;
}

.parent:hover .child, .parent:focus .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}


.child:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(167, 190, 213, 0.45);
}



.dropdown a:hover {background-color: #f0c543;}
.show {display: block;}

</style>
