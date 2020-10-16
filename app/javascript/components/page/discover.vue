<template>
<div>

  <div class="grid grid-cols-12 text-white  bg-gray-900">
    <div class="col-span-12 md:col-span-9">


      <div class="border-b border-gray-100 border-opacity-50 m-4">
        <div class="text-2xl">New tracks on SoundsGood <i class="fab fa-hotjar"></i></div>



        <div class="flex overflow-scroll text-gray-500 text-xs ">
        <chart v-for="chart in index.slice(0,10)" :chart='chart' />
        </div>

      </div>

      <div class="m-4">

        <div class="text-2xl">Recommand For Night Owl #coding #chill</div>
        <div class="text-xs text-gray-500 my-2">Suggestions based on what you've liked or played</div>

        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs"  @click="playTaglist" >
          <i class="fas fa-play cursor-pointer"></i>
          Play All</button>

        <div class="flex justify-around bg-leego_orange bg-opacity-50  p-2 rounded-lg  coding">
          <div class="w-1/4 bg-cover" :style="{ 'background-image': 'url('+  Cover + ')' }"></div>

          <div class="w-3/4 overflow-auto h-48">
            <codingTag v-for="coding in tag_1" :coding="coding" @clicked="changeCover" :passarray="passarray"/>
          </div>

        </div>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Weeky Top 5</div>
        <div class="flex my-4 overflow-scroll">

        <topfive/>


        </div>
      </div>









    </div>

    <div class="col-span-12 md:col-span-3 mb-12 right-0 border-l boder-gray-200">
      <div class="flex justify-between text-gray-500 border-b border-gray-200 text-sm p-2">


          <i class="fas fa-user-plus" style="font-size: 20px"></i> who to follow

      </div>

      <transition-group name="list">
        <whotofollow v-for="unfollower in unfollowers.slice(0,3)" :unfollower="unfollower" :key="unfollower.user_id"/>
      </transition-group>







        </div>
      </div>
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
import chart from './discover/chart';
import topfive from './discover/topfive';
import whotofollow from './whotofollow';
import codingTag from './discover/codingTag';
import electro from './discover/electro';


export default {
  data(){
    return{
      Cover:  '/img/night.jpg',
      passarray: '',
      playlists: [],

    }
  },

  // name: "chart",
  components: {
    chart,
    whotofollow,
    codingTag,
    topfive,
  },


  computed: {
    ...mapGetters({
      index: 'song/index',
      tag_1: 'song/tag_1',
      unfollowers: 'follow/unfollowers',
      isPLAY: 'songs/isPLAY',
      playerTracks:'songs/playerTracks',

    }),

  },

  ...mapActions('follow',['loadUNFollow'],['addFollow']),
  ...mapActions('song', ['song/loadIndex']),
  ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause",'setPlayerTracks']),

  methods:{
    changeCover(value){
      this.Cover = value;
    },
    playTaglist(){
      var codingTag = this.tag_1.map( a => a.audio );
      this.passarray = codingTag

      if( this.playerTracks[0] && (codingTag[0].artist === this.playerTracks[0].artist)){
        if(this.isPLAY == true){
          this.$store.dispatch('songs/pause')
        }else{
          this.$store.dispatch('songs/play')
        }
      }else{
        this.$store.dispatch('songs/setPlayerTracks', codingTag)
        this.$store.dispatch('songs/play')
      }
    }

  },
  created() {
    this.$store.dispatch('song/loadIndex');
    this.$store.dispatch('follow/loadUNFollow');

    // this.$store.dispatch("favorite/loadLikes");

  }
}
</script>

<style lang="css" scoped>
i.fab {
  position: relative;
  font-size: 2rem;
-webkit-animation-name: move; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
animation: move 1s infinite;

}
.coding {
    background-image:
    linear-gradient(to bottom, rgba(57, 55, 55, 1), rgba(56, 56, 56, 0.64)),
    url('/img/live-music.jpg');
    background-size: cover;
}


@keyframes move {
  0% { color: #e73d3d;}
  20% { color: #e73d3d;}
  70% {color: #e73d3d;}
}

.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(40px);
}

</style>
