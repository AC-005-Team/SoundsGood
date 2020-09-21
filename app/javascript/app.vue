<template>
<div>
<HeaderComponent />
<router-view/>
<!-- <playlist /> -->


<Player :songs="songs" :play="play" />

</div>


</template>

<script>
import HeaderComponent from './components/shared/header';
import axios from 'axios';
import { store } from './store/store'
import playlistitems from './components/playlistItem';
import playlist from './components/playlist';
import router from './router'
import Player from './components/shared/player';


export default {
  data() {
    return {
      songs: [],
      play: false
    }
  },
  router,
  store,
  components: {
    HeaderComponent,
    playlist,
    Player

  },
}
</script>
