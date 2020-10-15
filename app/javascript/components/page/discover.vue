<template>
<div>

  <div class="grid grid-cols-12 text-white  bg-gray-900">
    <div class="col-span-9">


      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">New tracks on SoundsGood <i class="fab fa-hotjar"></i></div>



        <div class="flex overflow-scroll text-gray-500 text-xs ">
        <chart v-for="chart in index" :chart='chart' />
        </div>

      </div>

      <div class="border-b border-gray-200 m-4">

        <div class="text-2xl">Recommand For Night Owl #coding #chill</div>
        <div class="text-xs text-gray-500 my-2">Suggestions based on what you've liked or played</div>

        <div class="flex justify-around p-5 bg-leego_orange bg-opacity-50  rounded-lg">
          <div class="w-1/4 bg-cover" :style="{ 'background-image': 'url('+  Cover + ')' }"></div>
          <div class="w-3/4 overflow-auto h-48">
            <codingTag v-for="coding in tag_1" :coding="coding" @clicked="changeCover"/>
          </div>
        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Weeky Top 5</div>
        <div class="flex my-4 overflow-scroll">

        <topfive/>


        </div>
      </div>









    </div>

    <div class="col-span-3 p-5 right-0 border-l boder-gray-200">
      <div class="flex justify-between text-gray-500 border-b border-gray-200 text-sm p-2">

        <button>
          who to follow
        </button>
      </div>

      <whotofollow v-for="unfollower in unfollowers.slice(0,3)" :unfollower="unfollower"/>





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
    }
  },

  // name: "chart",
  components: {
    chart,
    whotofollow,
    codingTag,
    topfive,
    electro
  },

  methods: {


  },

  computed: {
    ...mapGetters({
      index: 'song/index',
      tag_1: 'song/tag_1',
      unfollowers: 'follow/unfollowers'
    }),

  },

  ...mapActions('follow',['loadUNFollow'],['addFollow']),
  ...mapActions('song', ['song/loadIndex']),
  methods:{
    changeCover(value){
      this.Cover = value;
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

@keyframes move {
  0% { color: #e73d3d;}
  20% { color: #e73d3d;}
  70% {color: #e73d3d;}
}

</style>
