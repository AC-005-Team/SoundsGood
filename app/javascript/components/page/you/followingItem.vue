<template lang="html">

              <div class="col-span-2 my-2 mr-2 flex flex-col justify-between items-center"  @mouseleave="show = false">
                <div class="align-top w-full" @mouseover="show = true">
                  <img src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg"  class="rounded-full block">
                </div>
                <li> id: {{ wee.id }}</li>
                  <transition name="fade">
                  <button class="border border-orange-700 px-1 rounded follow" v-if="show" @click="unfollow">
                    <i class="fas fa-user"></i> following</p>
                  </button>
                </transition>


              </div>

</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
export default {
  props: ['wee'],
  data() {
    return{
      show: false
    }
  },

  ...mapActions(['follow/unFollow']),
  methods:{

        unfollow(){
          this.$store.dispatch('follow/unFollow', this.wee.id);
        }


    }

}


</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(5px);
  opacity: 0;
}

.follow:hover{
  background-color: rgb(227, 78, 78);
  color: white;
}
</style>
