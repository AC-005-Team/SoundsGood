<template>
  <div>
    <!-- <vueper-slides class="no-shadow"
:visible-slides="3"
slide-multiple
:gap="3"
:slide-ratio="1 / 4"
:dragging-distance="200"
:breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">


<vueper-slide />
</vueper-slides> -->

    <div class="flex overflow-scroll text-gray-500 text-xs">
      <div
        class="my-2 mr-2"
        @click="playPause"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
      >
        <!-- :class="[playing? 'fa-pause-circle': '' ]"  -->
        <div class="cover">
          <i
            class="far z-10 fa-pause-circle"
            style="font-size: 60px"
            v-show="playing"
          />
          <transition name="fade">
            <div class="flex-col justify-between">
              <div class="buttons flex flex-reversed rigt-0 items-center z-10">
                <i class="fa fa-ellipsis-h mr-2" @click.stop="toggle"></i>
                <i
                  class="fa fa-heart mr-2"
                  @click.stop="like"
                  :class="[changeColor ? 'like' : '']"
                ></i>
              </div>
            </div>
          </transition>

          <img class="h-32 max-w-xl mr-4" :src="chart.audio.cover" />
        </div>

        <div class="dropdown">
          <div
            id="myDropdown"
            class="dropdown-content "
            :class="[isActive ? 'show' : '']"
          >
            <a><i class="fas fa-headphones-alt addto"></i>add to play next</a>
            <a @click.stop="aaa" :song_id="this.chart.song_id"
              ><i class="fas fa-plus-circle addto"></i> add to playlist</a
            >
          </div>
        </div>

        <li>{{ chart.audio.name }}</li>
        <li>{{ chart.audio.artist }}</li>

        <!-- <i class="far fa-pause-circle" style="font-size: 60px" ></i> -->
        <!-- <i class="far" :class="[is? 'fa-pause-circle' : 'fa-play-circle']"  style="font-size: 60px"  /> -->
      </div>

      <sweet-modal ref="modal">
        <sweet-modal-tab title="Add To Playlist" id="tab1">
          <myPlaylist
            v-for="playlist in playlists"
            :playlist="playlist"
          ></myPlaylist>
        </sweet-modal-tab>
        <sweet-modal-tab title="Create Playlist" id="tab2">
          <addPlaylist />
        </sweet-modal-tab>
      </sweet-modal>
    </div>

  <sweet-modal ref="modal">
    <sweet-modal-tab title="Add To Playlist" id="tab1" class="overscroll-auto">
      <myPlaylist v-for="playlist in playlists" :playlist="playlist" ></myPlaylist >
      </sweet-modal-tab>
      <sweet-modal-tab title="Create Playlist" id="tab2">
        <addPlaylist @after_add="addPlaylist"/>
      </sweet-modal-tab>
    </sweet-modal>


  </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import {
  VueperSlides,
  VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import {
  SweetModal,
  SweetModalTab
} from 'sweet-modal-vue'

import myPlaylist from '../../shared/myPlaylist'
import addPlaylist from '../../shared/addPlaylist'

export default {
  name: "chart",
  data() {
    return {
      playBtn: false,
      is: false,
      changeColor: false,
      isActive: false,
      playlists: [],
    };
  },
  props: ["chart"],

  components: {
    VueperSlides,
    VueperSlide,
    SweetModal,
    SweetModalTab,
    myPlaylist,
    addPlaylist,
  },
  beforeCreate() {},

  methods: {
    ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
    ...mapActions("playlists", ["loadSongs"]),

    playPause() {
      if (this.playerTracks.song_id === this.chart.song_id) {
        if (this.isPLAY === true) {
          this.$store.dispatch("songs/pause");
          this.$store.dispatch("songs/continuePause");
        } else {
          this.$store.dispatch("songs/continuePlay");
          this.$store.dispatch("songs/play");
          // this.$store.dispatch('songs/play')
        }
      } else {
        this.$store.dispatch("songs/pause");
        this.$store.dispatch("playlistsSongs/loadSong", this.chart.song_id);
      }
    },

    aaa() {
      var song_id = event.target.getAttribute("song_id");
      this.$refs.modal.open("tab1");
      const axios = require("axios").create({
        baseURL: "http://127.0.0.1:3000",
      });
      axios
        // .get("/api/v1/playlists")
        .get(`/api/v1/songs/${song_id}`)
        .then((response) => (this.playlists = response.data.playlists))
        .catch(function(error) {
          console.log(error);
        });
    },

    mouseOver: function() {
      this.playBtn = true;
    },
    mouseLeave: function() {
      this.playBtn = false;
    },
    toggle() {
      return (this.isActive = !this.isActive);
    },

    like() {
      return (this.changeColor = !this.changeColor);
    },
    addPlaylist(obj) {
      this.playlists.push(obj)
    }
  },

  computed: {
    ...mapGetters({
      listsongs: "playlistsSongs/listsongs",
    }),
    ...mapGetters({
      playerTracks: "songs/playerTracks",
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),

    playing() {
      if (this.playerTracks.song_id === this.chart.song_id) {
        if (this.isPLAY === false) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    },

    // ...mapGetters({
    //   index: 'song/index'
    // }),
    //
    // index_song: function render() {
    //   var array1 = this.index
    //   var songs = {};
    //   var song_name = [];
    //   var song_artist = [];
    //   array1.forEach(a => song_name.push(a.audio.name))
    //   array1.forEach(a => song_artist.push(a.audio.artist))
    //   songs.name = song_name
    //   songs.artist = song_artist
    //   console.log(songs)
    //   return songs
    // },
  },

  ...mapActions("song", ["song/loadIndex"]),
  created() {
    this.$store.dispatch("song/loadIndex");
  },
};
</script>

<style lang="css" scoped>
.cover {
  height: 150px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  position: relative;
  /* box-shadow: 1px 1px 15px -1px rgba(0,0,0,0.75); */
}
.cover img {
  transition: transform 0.2s ease;
}
.cover:hover img {
  transform: scale(1.2);
  /* box-shadow: inset 0px -10px 10px 3px rgba(0,0,0,.2); */
}

.cover:hover {
  /* box-shadow: inset 0 0 0 1px rgba(0,0,0,.1); */
  transition: 0.3s;
  box-shadow: inset 0px -10px 10px 3px rgba(0, 0, 0, 0.2);
}
.buttons {
  position: absolute;
  bottom: 1rem;
  right: 0;
  color: rgba(110, 105, 105, 0.88);
}

.fa-pause-circle,
.fa-play-circle {
  font-size: 65px;
  color: rgba(247, 66, 2, 0.6);
  position: absolute;
  margin: 0 auto;
  top: 25px;
  left: 40px;
}
.fa-ellipsis-h:hover,
.fa-heart:hover {
  transform: scale(1.2);
  color:rgb(251, 171, 171);
  transition:.3s;

  transition: 0.3s;
}
.fa-ellipsis-h,
.fa-heart {
  font-size: 18px;
}

.like {
  color: rgb(255, 93, 33);
}

.fade-enter-active {
  transition: opacity 0.01s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dropdown {
  display: inline-block;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.addto {
  margin: 4px;
}

.dropdown-content {
  display: none;
  border-radius: 10px;
  margin: 1px;
  width: 100%;
  overflow: auto;
  background-color: rgba(#eeeeee, 1);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  display: block;
  border-bottom: 1px solid blackrgb(120, 119, 117);
}
.dropdown a:hover {
  transition: 0.2s;
  background-color: #f98060;
}
.show {
  display: block;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 1s, opacity 1s linear;
}
</style>
