<template lang="html">

  <div class="my-4 flex border-b boder-gray-200 p-2 text-gray-500">
    <img class="w-1/5 rounded-full" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
    <div class="w-4/5 mx-2 text-xs">
      <div class="">{{ unfollower.display_name }}</div>
      <div class="flex justify-between">
        <div class="flex text-gray-400">
          <div class="">{{ unfollower.display_name }}</div>
        </div>

        <button class="border border-gray-400 rounded p-1 hover:bg-leego_orange hover:text-white" @click="follow" >
          follow
        </button>
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
export default {
  props:['unfollower'],

  methods:{
    ...mapActions('follow', ['addFollow']),
        follow(){
          console.log(this.unfollower.user_id)
          this.$store.dispatch('follow/addFollow', this.unfollower.user_id);
        }


    }
}
</script>

<style lang="css" scoped>
</style>
