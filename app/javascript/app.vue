<template>
<div>
<HeaderComponent />
<transition name="fade" mode="out-in" >
  <router-view/>

</transition>

<!-- <playlist /> -->
<Player />

</div>


</template>

<script>
import HeaderComponent from './components/shared/header';
import axios from 'axios';
import { store } from './store/store'
import router from './router'
import Player from './components/shared/player';




export default {
  data() {
    return {
    }
  },
  router,
  store,
  components: {
    HeaderComponent,
    Player

  },
  created(){
    document.body.classList.add("bg-gray-900")

  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-60px);
}
</style>
