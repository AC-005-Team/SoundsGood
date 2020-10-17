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
// import playlistitems from './components/playlistItem';
// import playlist from './components/playlist';
import router from './router'
import Player from './components/shared/player';
// import dicover from './components/page/discover';
// import library from './components/page/library';
// import stream from './components/page/stream';
// import upload from './components/page/upload';



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
