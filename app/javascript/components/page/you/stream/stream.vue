<template lang="html">
  <div class="">
    <div class="grid grid-cols-12 mx-8 mt-6">
  <div class="col-span-12 md:col-span-9 mx-4">
    <div class="text-lg text-gray-600 mb-4">Hear the latest posts from the people youâ€™re following:</div>

          <streamItem v-for="stream in streamData" :stream="stream"/>
        </div>


        <div class="col-span-12 md:col-span-3 text-gray-600 text-sm m-4">
          <div class="flex justify-between border-b border-gray-400 mb-4">
            <div class="">
              <i class="fas fa-user-friends"></i>
              who to follow
            </div>
            <div class="">
              <i class="fas fa-redo"></i>
              Refresh
            </div>
          </div>
          <div class="flex">
            <img class="w-1/5 rounded-full" src="https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg" alt="">
            <div class="w-4/5 flex-col items-end">
              <p class="text-black">Tipsy Records</p>
              <div class="flex justify-between text-xs">
                <div class="">
                  <i class="fas fa-user-friends"></i>
                  60.7K
                  <i class="fab fa-soundcloud"></i>
                  33
                </div>
                <button class="flex items-center border border-gray-400 rounded px-2 text-black">
                  <i class="fas fa-user-check"></i>
                  <p class="">Fllow+</p>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between border-b border-gray-400 mb-4">
            <div class="">
              <i class="fas fa-heart"></i>
              10 likes
            </div>
            <div class="">
              View All
            </div>
          </div>

          <div class="flex">
            <img class="w-1/5" src="https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg">
            <div class="w-4/5 text-sm">
              <p class="">user_name</p>
              <p class="text-black">user_name</p>
              <div class="flex justify-around">
                <a href=""><i class="fas fa-arrow-right"></i>261K</a>
                <a href=""><i class="fas fa-heart"></i>3315</a>
                <a href=""><i class="fas fa-history"></i>60</a>
                <a href=""><i class="fas fa-comment-dots"></i>101</a>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="my-3 text-xs table-row-group">
              <div class="text-gray-500">
                <span class="hover:text-black"><a href="#">Legal</a></span>-
                <span class="hover:text-black"><a href="#">Privacy</a></span>-
                <span class="hover:text-black"><a href="#">Cookies</a></span>-
                <span class="hover:text-black"><a href="#">Imprint</a></span>-
                <span class="hover:text-black"><a href="#">Creator Resources</a></span>-
                <span class="hover:text-black"><a href="#">Blog</a></span>-
                <span class="hover:text-black"><a href="#">Charts</a></span>-
                <span class="hover:text-black"><a href="#">Popular Search</a></span>
              </div>
                <div class="flex mt-2 mb-20">
                  <button class="text-blue-500 hover:text-black pr-2">Language:</button>
                    English (US)
                </div>
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

import streamItem from './streamItem'

export default {
  components:{
    streamItem
  },

    computed: {
      ...mapGetters({
        streamData: 'stream/stream'
      })
    },

    ...mapActions('stream',['loadStream']),
    created() {
      this.$store.dispatch('stream/loadStream')
    }
  }

</script>

<style lang="css" scoped>
</style>
