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
  <div class="my-2 mr-2"  @click="playPause" @mouseover="mouseOver" @mouseleave="mouseLeave">
<!-- :class="[playing? 'fa-pause-circle': '' ]"  -->
    <div class="cover">
      <i class="far z-10 fa-pause-circle"  style="font-size: 60px" v-show="playing"  />
      <transition name="fade">
        <div  class="flex-col justify-between">
          <div class="buttons flex flex-reversed rigt-0 items-center z-10">
            <i class="fa fa-ellipsis-h mr-2" @click.stop="toggle"  ></i>
            <i class="fa fa-heart mr-2" @click.stop="like" :class="[changeColor? 'like':'']"></i>
          </div>



        </div>
      </transition>

      <img class="h-32 max-w-xl mr-4"  :src="chart.audio.cover">
    </div>



    <div class="dropdown">
      <div id="myDropdown" class='dropdown-content ' :class=" [isActive? 'show' : '']" >
        <a>add to play next</a>
        <a>add to playlist</a>
      </div>
    </div>

    <li> {{ chart.audio.name }} </li>
    <li>{{ chart.audio.artist }} </li>


    <!-- <i class="far fa-pause-circle" style="font-size: 60px" ></i> -->
    <!-- <i class="far" :class="[is? 'fa-pause-circle' : 'fa-play-circle']"  style="font-size: 60px"  /> -->


  </div>


</div>


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



export default {
  name: "chart",
  data() {
    return {
      playBtn: false,
      is: false,
      changeColor:false,
      isActive: false
    }
  },
  props: ['chart'],

  components: {
    VueperSlides,
    VueperSlide,
  },

  methods: {
    ...mapActions('songs', [ 'play','pause','continuePlay','continuePause']),
    ...mapActions('playlists', ['loadSongs']),

    playPause(){
      if(this.playerTracks.song_id === this.chart.song_id){
        if(this.isPLAY === true){
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('songs/continuePause')
        }else{
          this.$store.dispatch('songs/continuePlay')
          this.$store.dispatch('songs/play')
          // this.$store.dispatch('songs/play')
        }
      }else{
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('playlistsSongs/loadSong', this.chart.song_id)
      }
    },

    mouseOver: function() {
      this.playBtn = true
    },
    mouseLeave: function() {
      this.playBtn = false
    },
    toggle(){
      return this.isActive = !this.isActive
    },

    like() {
      return this.changeColor = !this.changeColor
    },
  },

  computed: {

        ...mapGetters({
          listsongs: 'playlistsSongs/listsongs'
        }),
        ...mapGetters({
            playerTracks: 'songs/playerTracks',
            continue: 'songs/continue',
            isPLAY: 'songs/isPLAY',
         }),

         playing(){
           if ( this.playerTracks.song_id === this.chart.song_id  ){
             if(this.isPLAY === false){
              return false;
             };
             return true;
           }else{
             return false;
           }
         }





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


  ...mapActions('song', ['song/loadIndex']),
  created() {
    this.$store.dispatch('song/loadIndex')
  }
}
</script>

<style lang="css" scoped>

.cover{
  height: 150px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  position: relative;
  /* box-shadow: 1px 1px 15px -1px rgba(0,0,0,0.75); */
}
.cover img {
  transition: transform .2s ease;
}
.cover:hover img {
  transform: scale(1.2);
  /* box-shadow: inset 0px -10px 10px 3px rgba(0,0,0,.2); */
}

.cover:hover{
  /* box-shadow: inset 0 0 0 1px rgba(0,0,0,.1); */
  transition:.3s;
  box-shadow: inset 0px -10px 10px 3px rgba(0,0,0,.2);
}
.buttons{
  position: absolute;
  bottom: 1rem;
  right: 0;
  color: rgba(110, 105, 105, 0.88);
}

.fa-pause-circle, .fa-play-circle{
  font-size: 65px;
  color: rgba(247,66,2,0.6);
  position: absolute;
  margin: 0 auto;
  top: 25px;
  left: 40px;
}
.fa-ellipsis-h:hover,.fa-heart:hover{
  transform: scale(1.2);
  transition:.3s;
}
.fa-ellipsis-h,.fa-heart{
  font-size: 18px;
}

.like{
  color:rgb(255, 93, 33);
}

.fade-enter-active {
  transition: opacity .01s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  /* position: absolute; */
  /* left: 20px;
  top:0; */
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
