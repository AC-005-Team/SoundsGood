<template lang="html">
  <div class="">


      <form class="w-full max-w-sm mx-auto" @submit.prevent="uploadForm">
  <div class="items-center border-b border-teal-500 py-2 ">
    <label for="playlist_title">Playlist Title</label>
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="playlist[name]" v-model="name"  >
  </div>
  <div class="items-center border-b border-teal-500 py-2">
    <label for="playlist_name">Playlist Intro </label>
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="playlist[intro]" v-model="intro">
  </div>
  <input type="submit" name="commit" class="mt-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" value="Create Playlist" data-disable-with="Create Playlist">

</form>




  </div>
</template>

<script>
import Api from '../../api/api'
import axios from 'axios';

export default {
  data() {
    return {
      name: null,
      intro: null,
      display: false,
      id: null

    }
  },
  props: ["track_id"],
  methods:{
    uploadForm() {
      let formData = new FormData();
      formData.append("playlist[name]", this.name)
      formData.append("playlist[intro]", this.intro)
      for(var pair of formData.entries()){
        console.log(pair[0]+','+pair[1])
      }
      // axios.defaults.headers.common = {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   withCredentials: true,
      //   'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      // };
      // const config = {
      //   onUploadProgress: progressEvent => console.log(progressEvent.loaded)
      // }
      let song_id =  this.track_id;
      Api().post(`/playlists.json?song_id=${song_id}`,formData, {
        withCredentials: true
      }).then(response => {
        this.$emit('after_add', { name: this.name, intro: this.intro })
        this.name = null
        this.intro = null
      }).catch(error => {
        console.log(error.response)
      })



    }
  }
}
</script>

<style lang="scss" scoped>
$orange: #f29e73;
$dark-orange: #b52600;
$white: #fff;
$curve: cubic-bezier(0.850, 0.000, 0.550, 1.300);
$speed: 1.3s;


// Container
.animation {

  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(17, 16, 16, 0.66);
}

// Soundwave animation
.loader {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 175px;
  height: 100px;
  span {
    display: block;
    background: $orange;
    width: 7px;
    height: 10%;
    border-radius: 14px;
    margin-right: 5px;
    float: left;
    margin-top: 20%;
    &:last-child {
      margin-right: 0px;
    }
    &:nth-child(1) {
      animation: load $speed 1.4s infinite linear;
    }
    &:nth-child(2) {
      animation: load $speed 1.2s infinite linear;

    }
    &:nth-child(3) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(4) {
      animation: load $speed 0.7s infinite linear;
    }
    &:nth-child(5) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(6) {
      animation: load $speed 0.4s infinite linear;
    }
    &:nth-child(7) {
      animation: load $speed 0.2s infinite linear;
    }
    &:nth-child(8) {
      animation: load $speed 0s infinite linear;
    }
    &:nth-child(9) {
      animation: load $speed 0.3s infinite linear;
    }
    &:nth-child(10) {
      animation: load $speed 0.5s infinite linear;
    }
    &:nth-child(11) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(12) {
      animation: load $speed 0.8s infinite linear;
    }
    &:nth-child(13) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(14) {
      animation: load $speed 1.2s infinite linear;
    }
    &:nth-child(15) {
      animation: load $speed 1.4s infinite linear;
    }
  }
}

@keyframes load {
  0% {
    background: $orange;
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: $dark-orange;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: $orange;
    height: 10%;
    margin-top: 25%;
  }
}




</style>
