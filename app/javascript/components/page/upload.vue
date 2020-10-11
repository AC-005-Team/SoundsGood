<template lang="html">
  <div class="">
    <!-- <div class="flex justify-between text-sm m-4 border-b border-gray-400"> -->
      <!-- <div class="flex m-2">
        <button class="m-2 hover:text-orange-500">UpLoad</button>
        <button class="m-2 hover:text-orange-500">Mastering</button>
        <button class="m-2 hover:text-orange-500">Your Tracks</button>
        <button class="m-2 hover:text-orange-500">Insights</button>
        <button class="m-2 hover:text-orange-500">Pro Plan</button>
        <button class="m-2 hover:text-orange-500">Pulse</button>
      </div> -->
      <!-- <div class="flex items-center">
        <svg class="svg-inline--fa fa-share-square fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg><!-- <i class="fas fa-share-square"></i> -->
        <!-- <button class="m-2">Creators on SoundsGood</button> -->
      <!-- </div> -->
    <!-- </div> -->
    <div class="m-4">
          <form @submit.prevent="uploadForm">












            <!-- <input type="hidden" name="authenticity_token" value="oXk6f8bIOHgjfx2DX3jsKnC0+mDlh5v4kCq/6TWs+i7fZ4ui+JK8LxMc/PKlFYLWeHmjg4x/xAdnt7hbxS1qvw=="> -->
<!--
          <div class="m-auto w-2/3 border border-gray-400 p-4">
            <div class="flex justify-between items-center">
              <div class="">
                <div class="flex justify-between items-center">
                  <div class="pr-2">0% of free Uploads used</div>

                  <button>
                    <svg class="svg-inline--fa fa-arrow-down fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg><!-- <i class="fas fa-arrow-down"></i> -->
                  <!-- </button>
                </div>
                <div>進度條</div>
                <div class="flex">
                  <button class="text-blue-500 hover:text-black">Try Pro Unlimited</button>
                  <p class="px-2">for unlimited uploads.</p>
                </div>
              </div>

              <button class="text-orange-500 border border-orange-600 rounded p-2 hover:bg-orange-600 hover:text-white">Try Pro Unlimited</button>

            </div>
          </div> -->

            <div class="mt-2 m-auto w-2/3 border border-gray-400 p-4">
              <div class="text-center">
                <p class="py-2 text-2xl">Upload Your Music, audio type must be mp3,ogg,mpeg</p>


                  <!-- <button class="text-white bg-orange-600 rounded py-2 px-10 relative w-2/5 m-auto hover:bg-white hover:text-orange-600 border border-orange-600">
                    Choose Music to Upload
                  </button><br> -->
                    <ValidationProvider rules="required|ext:mp3,ogg,mpeg"  ref="provider" name="audio"  v-slot="{ errors, validate }">

                    <input class="song_value" type="file" name="song[track]" id="song_track" @change="handleFileChange" >
                  <!-- <input type="file" @change="validate"> -->
                     <span class="text-red-600">{{ errors[0] }}</span>
                     </ValidationProvider>

                  <div class="text-2xl" id="music">{{ fileName }}</div>

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
                              <ValidationProvider rules="required|ext:jpg" ref="image_area" name="image"  v-slot="{ errors, validate }">
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
      display: false
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
    getTag() {
      var views = this.tags.map(item => item.text);
      console.log(views);
      return views;
    }
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
      let formData = new FormData();
      formData.append("song[name]", this.name)
      formData.append("song[intro]", this.intro)
      formData.append("song[track]", this.track)
      formData.append("song[image]", this.image)
      this.getTag.forEach((tag) => {
        formData.append("song[tag_items][]", tag)
      })
      // console.log(this.getTag)
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ',' + pair[1])
      // }
      // const config = {
      //   onUploadProgress: progressEvent => console.log(progressEvent.loaded)
      // }
      Api().post('/songs', formData).then(response => {

        console.log("QWEQWEQW", response)
        this.display = false;
        this.$router.push('discover');
      }).catch(error => {
        console.log(error.response)
      })
      this.display = true;

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
    width: 8px;
    height: 10%;
    border-radius: 14px;
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
