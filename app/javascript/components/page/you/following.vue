<template>
<div>
  <div class="col-span-9 bg-white">
    <div class="mx-4 p-5">
      <div class="flex justify-between text-lg text-gray-500">
        <div class="">Hear what the people you follow have posted:</div>
      </div>

      <div class="grid grid-cols-12 gap-4">
        <followingItem v-for="wee in followees" :wee="wee" />
      </div>
    </div>a


  </div>
</div>
</template>

<script>
import followingItem from './followingItem'
import Api from "../../../api/api";
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'following',
  components: {
    followingItem,
  },

  computed: {
    ...mapGetters({
      followees: 'follow/followees'
    })
  },

  ...mapActions('follow',['unFollow'],['loadFollowees']),
  created() {
    console.log('123')
    this.$store.dispatch('follow/loadFollowees')
  }
}
</script>

<style lang="css" scoped>
</style>
