<template>
<div>
<HeaderComponent />
<router-view/>
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
}
</script>
