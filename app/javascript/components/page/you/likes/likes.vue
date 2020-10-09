<template >
<div class="col-span-9 bg-white">
  <div class="mx-4 p-5">

    <div class="flex justify-between text-lg text-gray-500">
      <div class="">Hear the tracks you’ve liked:</div>
      <div class="flex w-1/3">
        <input class="mx-2 border border-gray-200 rounded w-3/4" type="text" placeholder="Fillter">
        <button class="border border-orange-600 text-orange-600 w-1/4 flex justify-between items-center px-2">
          <p>All</p>
          <i class="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>

    <div class="flex overflow-scroll">
      <likeSongs v-for="song in songs" :song="song"/>

    </div>


    <div class="flex border-t border-gray-500 mx-4">
      <div class="my-3 text-xs table-row-group">

        <div class="text-gray-500">
          <span class="hover:text-black"><a href="#">Legal</a></span>
          -
          <span class="hover:text-black"><a href="#">Privacy</a></span>
          -
          <span class="hover:text-black"><a href="#">Cookies</a></span>
          -
          <span class="hover:text-black"><a href="#">Imprint</a></span>
          -
          <span class="hover:text-black"><a href="#">Creator Resources</a></span>
          -
          <span class="hover:text-black"><a href="#">Blog</a></span>
          -
          <span class="hover:text-black"><a href="#">Charts</a></span>
          -
          <span class="hover:text-black"><a href="#">Popular Search</a></span>
        </div>

        <div class="mt-2 mb-20">
          Language: English (US)
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import likeSongs from './like_songs'
import Api from "../../../../api/api";

import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'



export default {
  data(){
    return{
      songs:null
    }
  },
  components: {
    likeSongs
    },
    computed:{
      ...mapGetters({
        like_songs: 'song/like_songs'
      })
    },
//為什麼會失敗！！！！！！
// ...mapActions('song', ['song/loadlikeSongs']),
created() {
  Api().get('/api/v1/library/likes')
      .then(response => (this.songs = response.data))


  // this.$store.dispatch('song/loadlikesongs')
  }
}
</script>

<style lang="css" scoped>
</style>
