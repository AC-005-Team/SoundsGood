<template>
<div>

  <div class="bg-gray-100 grid grid-cols-12 mx-5">
    <div class="col-span-9 bg-white">


      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">New tracks on SoundsGood <i class="fab fa-hotjar"></i></div>



        <div class="flex overflow-scroll text-gray-500 text-xs">
        <chart v-for="chart in index" :chart='chart' />
        </div>

      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">More of what you like</div>
        <div class="text-xs text-gray-500 my-2">Suggestions based on what you've liked or played</div>
        <div class="flex justify-around p-5 bg-gradient-to-r from-red-500 via-orange-400 to-black rounded-lg">
          <div class="w-1/4 bg-cover" style="background-image: url(https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg)"></div>
          <div class="w-3/4 overflow-auto h-48">

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

          </div>

        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Charts: Top 50</div>
        <div class="text-xs text-gray-500 my-2">The most played tracks on SoundCloud this week</div>
        <div class="flex my-4 overflow-scroll">

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

        </div>
      </div>




      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">The Upload</div>
        <div class="text-xs text-gray-500 my-2">Newly posted tracks. Just for you</div>
        <div class="flex justify-aroundp-3 p-5 bg-gradient-to-r from-gray-500 via-white to-pink-300">
          <div class="w-1/4 bg-cover" style="background-image: url(https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg)"></div>
          <div class="w-3/4 overflow-auto h-48">
            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>
          </div>
        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>



      <div class="p-5">
        <div class="text-2xl">Relax</div>
        <div class="text-xs text-gray-500 my-2">Popular playlists from the SoundCloud community</div>
        <div class="flex my-4 overflow-scroll">
          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

        </div>
      </div>



    </div>

    <div class="col-span-3 bg-white p-5 right-0 border-l boder-gray-200">
      <div class="flex justify-between text-gray-500 border-b border-gray-200 text-sm p-2">

        <button class="hover:text-red-700">
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
import whotofollow from './whotofollow';


export default {

  // name: "chart",
  components: {
    chart,
    whotofollow
  },

  methods: {


  },

  computed: {
    ...mapGetters({
      index: 'song/index',
      unfollowers: 'follow/unfollowers'
    }),



  },


  ...mapActions('song', ['song/loadIndex']),
  ...mapActions('follow', ['follow/loadUNFollow']),
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
-webkit-animation-name: move; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
animation: move 2s infinite;

}

@keyframes move {
  0% { color: #e73d3d;}
  20% { color: #e73d3d;}
  70% {color: #e73d3d;}
}

</style>
