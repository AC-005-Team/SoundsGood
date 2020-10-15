<template >
<div class="col-span-9 bg-white">
    <div class="flex justify-between">
      <div class="grid sm:grid-cols-2 md:col-span-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
        <likeSongs v-for="song in songs" :song="song"/>
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
