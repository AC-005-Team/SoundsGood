<template lang="html">
  <div class="">


      <form class="w-full max-w-sm" @submit.prevent="uploadForm">
  <div class="items-center border-b border-teal-500 py-2">
    <label for="playlist_title">Playlist Title</label>
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="playlist[name]" v-model="name"  >
  </div>
  <div class="items-center border-b border-teal-500 py-2">
    <label for="playlist_name">Playlist Intro </label>
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="playlist[intro]" v-model="intro">
  </div>
  <input type="submit" name="commit" class="mt-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" value="Create Playlist" data-disable-with="Create Playlist">

</form>
      <!-- <form action="/users/2/playlists" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="3oFbc4axURROaJZDOWxYCYu+eDjrYiYaTftwemBnxnWgn+quuOvVQ34LdzLDATb1g3Mh24KaeeW6ZnfIkOZW5A==">
  <div class="border-b border-teal-500">
    <label for="playlist_name">Name</label>
    <input type="text" name="playlist[name]"  id="playlist_name">
  </div>

  <div class="border-b border-teal-500">
    <label for="playlist_intro">Intro</label>
    <input type="text" name="playlist[intro]" id="playlist_intro" >
  </div>

  <input type="submit" name="commit" class="mt-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" value="Create Playlist" data-disable-with="Create Playlist">
</form> -->


  </div>
</template>

<script>
import Api from '../../api/api'
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      intro: ''
    }
  },
  methods:{
    uploadForm() {
      let formData = new FormData();
      formData.append("playlist[name]", this.name)
      formData.append("playlist[intro]", this.intro)
      for(var pair of formData.entries()){
        console.log(pair[0]+','+pair[1])
      }
      axios.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest',
        withCredentials: true,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      };
      const config = {
        onUploadProgress: progressEvent => console.log(progressEvent.loaded)
      }
      axios.post('http://127.0.0.1:3000/users/2/playlists', formData,config, {
        withCredentials: true
      }).then(response => {
        console.log("success", response)
      }).catch(error => {
        console.log(error.response)
      })



    }
  }
}
</script>

<style lang="css" scoped>

</style>
