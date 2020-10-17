<template lang="html">

  <div class="my-4 flex border-b border-gray-200 border-opacity-25 p-2 text-gray-500">
    <img class="w-1/6 rounded-full" :src="unfollower.avatar" alt="">
    <div class="w-4/5 mx-2 text-xs">
      <div class="">{{ unfollower.display_name }}</div>
      <div class="flex justify-between">
        <div class="flex text-gray-400">
          <div class="">{{ unfollower.user_id }}</div>
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
