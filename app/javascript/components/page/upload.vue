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
          <form enctype="multipart/form-data" action="/users/2/songs" accept-charset="UTF-8" method="post" @submit.prevent="uploadForm">
            <input type="hidden" name="authenticity_token" value="oXk6f8bIOHgjfx2DX3jsKnC0+mDlh5v4kCq/6TWs+i7fZ4ui+JK8LxMc/PKlFYLWeHmjg4x/xAdnt7hbxS1qvw==">
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
                <p class="py-2 text-2xl">Drag and drop your tracks &amp; albums here</p>

                  <div class="text-white bg-orange-600 rounded py-2 px-10 relative w-2/5 m-auto">
                    Choose Music to Upload
                    <input class="song_value bg-black opacity-0 absolute top-0 left-0 h-10" type="file" name="song[track]" id="song_track" @change="song_value">
                  </div><br>
                  <div class="text-2xl" id="music">{{ fileName }}</div>

                  <!-- <input type="checkbox">
                  <span class="py-2 text-xs">
                    Make a playlist when multiple files are selected</span> -->

                  <!-- <div class="text-xs">
                    <span class="py-2 ">Privacy:
                    </span>
                    <input type="radio" value="Public" name="Privacy" id="Public">
                    <label for="Public">Public</label>
                    <input type="radio" value="Private" name="Privacy" id="Private">
                    <label for="Private">Private</label>
                  </div> -->
                  <!-- <p class="py-2 text-xs">Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</p> -->
                  </div>
                </div>


                  <div class="w-2/3 m-auto text-xs">
                    <div class="flex justify-between items-center bg-gray-200 p-2 border border-gray-300 rounded">
                      <div class="flex">
                        <!-- <p class="">Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</p> -->
                        <!-- <button class="text-blue-600 hover:text-black">Learn more about lossless HD.</button> -->
                      </div>
                      <!-- <button class="bg-white rounded p-1 border border-gray-400">Replace File</button> -->
                    </div>

                    <div class="flex justify-between text-xs text-gray-600 my-2">
                      <p class="">Name of songs</p>
                      <p class="">Ready. Click Save to post this track.</p>
                    </div>

                    <div class="flex justify-between h-2">
                      <div class="w-1/2 bg-blue-600"></div>
                      <div class="w-1/2 bg-orange-600"></div>
                    </div>

                    <div class="px-6 py-2 border border-gray-200">
                      <div class="flex text-2xl border-b border-gray-400 mb-6">
                        <button class="mx-2 text-orange-600">Basic Info</button>
                        <button class="mx-2">Meta Data</button>
                        <button class="mx-2">Permissions</button>
                      </div>

                      <div class="flex my-2">
                        <div class="w-1/3 max-h-full bg-cover bg-top bg-gradient-to-b from-gray-500 via-white to-orange-300" :style="{ 'background-image': 'url('+  url + ')' }">

                            <div class="w-full max-h-full rounded p-2 bg-gray-200 relative" >
                              <input class="bg-black opacity-0 absolute top-0 left-0 h-10" type="file" name="song[image]" @change="showMyImage">
                              <i class="fas fa-camera-retro"></i>
                              Upload Image
                              <!-- <img class="" id="thumbnil" :src="url"> -->
                            </div>
                           </div>
                          <div class="w-2/3 mx-4 text-sm">
                                <label for="song_name">Name</label>
                                <input autofocus="autofocus" autocomplete="name" class="mb-4 border border-gray-400 rounded w-full p-1" v-model="name" name="song[name]" id="song_name">

                                <div class="mb-4 flex">
                                  <p class="text-gray-500">Soundsgood.com/aabbccdd/</p>
                                  <input class="w-full" type="text" v-model="name"  placeholder="songsname">
                                  <button class="">
                                    <svg class="svg-inline--fa fa-pencil-alt fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg><!-- <i class="fas fa-pencil-alt"></i> -->
                                  </button>
                                </div>

                                        <label for="song_tag_list">Tag list</label>
                                        <!-- <select name="song[tag_items][]"  multiple="multiple"  class="tag_list mb-4 border border-gray-400 rounded w-full p-1">

                                        </select> -->
                                        <vue-tags-input
    v-model="tag"
    :tags="tags"
    @tags-changed="newTags => tags = newTags"
  />

                                        <br>
                                            <label for="song_intro">Intro</label>
                                            <input class="mb-4 border border-gray-400 rounded w-full p-1" v-model="intro" name="song[intro]" id="song_intro">

                                            <!-- <div class="text-xs">
                                              <span class="py-2 ">Privacy:
                                              </span>
                                              <input type="radio" value="Public" name="Privacy" id="Public">
                                              <label for="Public">Public</label>
                                              <input type="radio" value="Private" name="Privacy" id="Private">
                                              <label for="Private">Private</label>
                                            </div> -->
                                          </div>
                                        </div>
                                      </div>


                                      <div class="flex justify-between items-center p-6 border border-gray-200 rounded">
                                        <div class="flex">
                                          <p class="text-orange-600">*</p>
                                          <p class="">Required fields</p>
                                        </div>
                                        <div class="text-sm">
                                          <button class="mr-2">Cancel</button>
                                          <div class="animation">

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

                                          <input type="submit" name="commit" value="Create Song" data-disable-with="Create Song">

                                        </div>
                                      </div>
                                      <div class="flex m-6 border-b border-gray-300 py-2">
                                        <p class="">By uploading, you confirm that your sounds comply with our</p>
                                        <button class="text-blue-600 hover:text-black">Terms of Use</button>
                                        <p class="">and you don't infringe anyone else's rights.</p>
                                      </div>
                                        <div class="flex m-6">
                                          <div class="my-3 text-xs table-row-group">
                                            <div class="text-gray-500">
                                              <span class="hover:text-black">
                                                <a href="#">Legal</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Privacy</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Cookies</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Imprint</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Creator Resources</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Blog</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Charts</a>
                                              </span>
                                              <span class="hover:text-black">
                                                <a href="#">Popular Search</a>
                                              </span>
                                            </div>
                                            <div class="flex mt-2 mb-20">
                                              <button class="text-blue-500 hover:text-black pr-2">Language:</button>
                                              English (US)
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
      fileName: '',
      url: '',
      track: null,
      image: null,
      name: this.name,
      intro: this.intro,
      tag: '',
      tags: [],

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
      return views;
    }
  },

  methods: {
    song_value() {
      var fileData = event.target.files[0];
      this.track = fileData
      this.fileName = fileData.name
    },
    showMyImage() {
      var fileData = event.target.files[0];
      this.image = fileData
      this.url = URL.createObjectURL(fileData)
    },
    uploadForm() {
      let formData = new FormData();
      formData.append("song[name]", this.name)
      formData.append("song[intro]", this.intro)
      formData.append("song[track]", this.track)
      formData.append("song[image]", this.image)
      formData.append("song[tag_items]", this.getTag)
      // for(var pair of formData.entries()){
      //   console.log(pair[0]+','+pair[1])
      // }
      axios.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest',
        withCredentials: true,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      };
      const config = {
        onUploadProgress: progressEvent => console.log(progressEvent.loaded)
      }
      axios.post('http://127.0.0.1:3000/users/2/songs', formData,config, {
        withCredentials: true
      }).then(response => {
        console.log("QWEQWEQW", response)
      }).catch(error => {
        console.log(error.response)
      })
      // axios({
      //     method: 'post',
      //     url: 'http://127.0.0.1:3000/users/2/songs',
      //     data: formData,
      //     withCredentials: true,
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   })
      //   .then(
      //     (response) => {
      //       console.log(response)
      //     },
      //     (error) => {
      //       console.log(error)
      //     }
      //   );



    }



  }
}
</script>

<style lang="css" scoped>
</style>
