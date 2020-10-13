<template lang="html">
  <div class="">

    <div class="m-4">
          <form @submit.prevent="uploadForm">


            <div class="mt-2 m-auto w-2/3 border border-gray-400 p-4">
              <div class="text-center">
                <p class="py-2 text-2xl">Upload Your Music, audio type must be mp3,ogg,mpeg</p>



                    <ValidationProvider rules="required|ext:mp3,ogg,mpeg"  ref="provider" name="audio"  v-slot="{ errors, validate }">

                    <input class="song_value" type="file" name="song[track]" id="song_track" @change="handleFileChange" >
                  <!-- <input type="file" @change="validate"> -->
                     <span class="text-red-600">{{ errors[0] }}</span>
                     </ValidationProvider>

                  <div class="text-2xl" id="music"></div>

                  </div>
                </div>


                  <div class="w-2/3 m-auto text-xs">
                    <div class="flex justify-between items-center bg-gray-200 p-2 border border-gray-300 rounded">
                      <div class="flex">
                      </div>
                    </div>

                    <!-- <div class="flex justify-between text-xs text-gray-600 my-2">
                      <p class="">Name of songs</p>
                      <p class="">Ready. Click Save to post this track.</p>
                    </div> -->

                    <div class="flex justify-between h-2">
                      <div class="w-1/2 bg-blue-600"></div>
                      <div class="w-1/2 bg-orange-600"></div>
                    </div>

                    <div class="px-6 py-2 border border-gray-200">
                      <div class="flex text-2xl border-b border-gray-400 mb-6">
                        <button class="mx-2 text-orange-600">Basic Info</button>
                      </div>

                      <div class="flex my-2">
                        <div class="w-1/3 max-h-full bg-cover bg-top bg-gradient-to-b from-gray-500 via-white to-orange-300" :style="{ 'background-image': 'url('+  url + ')' }">

                            <div class="w-full max-h-full rounded p-2 bg-gray-200 relative" >
                              <i class="fas fa-camera-retro"></i>
                              Upload Image
                              <ValidationProvider rules="required|ext:jpg,png,jpeg" ref="image_area" name="image"  v-slot="{ errors, validate }">
                                <input type="file" class="" name="song[image]" title="" @change="showMyImage">
                                <span class="text-red-600">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                           </div>

                          <div class="w-2/3 mx-4 text-sm">
                            <label for="song_name">Name</label>
                            <ValidationProvider rules="required" ref="name_area" name="name"  v-slot="{ errors, validate }">
                                <input class="mb-4 border border-gray-400 rounded w-full p-1" v-model="name" name="song[name]" id="song_name">
                                <span class="text-red-600">{{ errors[0] }}</span>
                                </ValidationProvider>

                                        <label for="song_tag_list">Music Genre</label>
                                        <v-select multiple v-model="selected" :options="options" :value="selected" />
                                        <label for="song_tag_list">Tag list</label>
                                        <vue-tags-input v-model="tag" :tags="tags" @tags-changed="newTags => tags = newTags"/>


                                        <br>
                                        <ValidationProvider rules="required" ref="intro_area" name="intro"  v-slot="{ errors, validate }">
                                            <label for="song_intro">Intro</label>
                                            <input class="mb-4 border border-gray-400 rounded w-full p-1" v-model="intro" name="song[intro]" id="song_intro">
                                            <span class="text-red-600">{{ errors[0] }}</span>
                                          </ValidationProvider>
                                          </div>
                                        </div>
                                      </div>




                                      <div class="flex justify-center items-center p-6 border border-gray-200 rounded">

                                        <button type="submit" class="submit" @click.prevent="uploadForm" >Submit</button>
                                        <div class="text-sm">

                                          <div class="animation" v-show="display">
                                            <div class="loader">
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                            </div>
                                          </div>




                                        </div>
                                      </div>
                                      </div>
                                    </form>
                                  </div>

  </div>


</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
import Api from '../../api/api'
import axios from 'axios';
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'






export default {
  data() {
    return {
      value: '',
      fileName: '',
      url: '',
      track: null,
      image: null,
      name: this.name,
      intro: this.intro,
      tag: '',
      tags: [],
      aaa: [],
      value: '',
      display: false,
      options:['Blues','Classical','Country','Electronic','Hip-Hop','Instrumental','Jazz','Pop','Rock'
               ,'Soul-RnB','Podcast'],
      selected:''

    }
  },
  components: {
    VueTagsInput,

  },

  // mounted() {
  //   $(".tag_list").select2({
  //     tags: true,
  //     tokenSeparators: [',', ' ']
  //   })
  // },
  computed: {
    ...mapGetters({
      user_id: 'user/user_id',
      user_name: 'user/user_name'
    }),
    getTag() {
      var views = this.tags.map(item => item.text);
      console.log(views);
      return views;
    }
  },
  beforeCreate(){
    this.$store.dispatch('user/loadUser')
  },

  methods: {
    async handleFileChange(e) {
      const {
        valid
      } = await this.$refs.provider.validate(e);

      if (valid) {
        var fileData = event.target.files[0];
        this.track = fileData
        this.fileName = fileData.name
      }
    },

    // song_value() {
    //   var fileData = event.target.files[0];
    //   this.track = fileData
    //   this.fileName = fileData.name
    // },
    async showMyImage(e) {
      const {
        valid
      } = await this.$refs.image_area.validate(e);

      if (valid) {
        var fileData = event.target.files[0];
        this.image = fileData
        this.url = URL.createObjectURL(fileData)
      }
    },
    uploadForm() {


      if( this.name && this.intro && this.track && this.image ){
        let formData = new FormData();
        formData.append("song[name]", this.name)
        formData.append("song[intro]", this.intro)
        formData.append("song[track]", this.track)
        formData.append("song[image]", this.image)
        this.getTag.forEach((tag) => {
          formData.append("song[tag_items][]", tag)
        })
        formData.append("song[tag_items][]", this.selected)
        // for(var pair of formData.entries()) {
        //   console.log(pair[0]+ ', '+ pair[1]);
        // }


        Api().post('/songs', formData).then(response => {
          console.log("QWEQWEQW", response)
          this.display = false;
          var u_id = this.user_id
          window.location.href = `/users/${u_id}`;
          // this.$router.push('discover');
        }).catch(error => {
          console.log(error.response)
        })
        this.display = true;
      }else{
        this.$alert("Please fill the form properly!");
      }
    }
   }
}




</script>

<style lang="scss" scoped>

$orange: #f4c2a8;
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
  width: 500px;
  height: 200px;
  span {
    display: block;
    background: $orange;
    width: 10px;
    // height: 10%;
    border-radius: 20px;
    margin-right: 20px;
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
    height: 20%;
    margin-top: 25%;
  }
}



</style>
