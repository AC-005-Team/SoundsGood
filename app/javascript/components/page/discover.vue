<template>
<div>

  <div class="bg-gray-100 grid grid-cols-12 mx-5">
    <div class="col-span-9 bg-white">


      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Charts: New &amp; hot</div>
        <div class="text-xs text-gray-500 my-2">Up-and-coming tracks on SoundCloud</div>

        <div class="flex overflow-scroll text-gray-500 text-xs">
            <chart v-for="chart in index" :chart='chart' />
        </div>

      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">More of what you like</div>
        <div class="text-xs text-gray-500 my-2">Suggestions based on what you've liked or played</div>
        <div class="flex justify-around p-5 bg-gradient-to-r from-red-500 via-orange-400 to-black rounded-lg">
          <div class="w-1/4 bg-cover" style="background-image: url(https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg)"></div>
          <div class="w-3/4 overflow-auto h-48">

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

          </div>

        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Charts: Top 50</div>
        <div class="text-xs text-gray-500 my-2">The most played tracks on SoundCloud this week</div>
        <div class="flex my-4 overflow-scroll">

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

        </div>
      </div>




      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">The Upload</div>
        <div class="text-xs text-gray-500 my-2">Newly posted tracks. Just for you</div>
        <div class="flex justify-aroundp-3 p-5 bg-gradient-to-r from-gray-500 via-white to-pink-300">
          <div class="w-1/4 bg-cover" style="background-image: url(https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg)"></div>
          <div class="w-3/4 overflow-auto h-48">
            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>
          </div>
        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">SoundCloud Weekly</div>
        <div class="text-xs text-gray-500 my-2">All of SoundCloud. Just for you</div>
        <div class="flex justify-aroundp-3 p-5 bg-gradient-to-r from-gray-400 via-white to-red-400">
          <div class="w-1/4 bg-cover" style="background-image: url(https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg)"></div>
          <div class="w-3/4 overflow-auto h-48">
            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>

            <div class="flex justify-around hover:bg-gray-100 border-b border-gray-100 mx-2">
              <div class="w-9/12 m-2 text-base text-gray-500">Tipsy Records — Toniia &amp; Geena Fontanella - Psychic</div>
              <div class="w-3/12 m-2 text-base text-gray-500 text-right">375K</div>
            </div>
          </div>
        </div>
        <button class="text-center p-1 border border-gray-400 ml-auto my-3 block rounded text-xs">Go to Playlist</button>
      </div>

      <div class="p-5">
        <div class="text-2xl">Relax</div>
        <div class="text-xs text-gray-500 my-2">Popular playlists from the SoundCloud community</div>
        <div class="flex my-4 overflow-scroll">
          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

        </div>
      </div>

      <div class="border-b border-gray-200 m-4">
        <div class="text-2xl">Chill</div>
        <div class="text-xs text-gray-500 my-2">Popular playlists from the SoundCloud community</div>
        <div class="flex my-4 overflow-scroll">
          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

          <div class="my-2 mr-2">
            <img class="h-48 max-w-3xl" src="https://i1.sndcdn.com/artworks-LPiPCego5LCeQz9V-0Vg0sg-t500x500.jpg" alt="">
            <div class="">All music genres</div>
            <div class="text-xs text-gray-500">New &amp; Hot</div>
          </div>

        </div>
      </div>


    </div>

    <div class="col-span-3 bg-white p-5 right-0 border-l boder-gray-200">
      <div class="flex justify-between text-gray-500 border-b border-gray-200 text-sm p-2">

        <button class="hover:text-red-700">
          <svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
            </path>
          </svg><!-- <i class="fas fa-heart"></i> -->
          2 likes
        </button>
        <button class="hover:text-black">view all</button>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around text-gray-500">
            <a href=""><svg class="svg-inline--fa fa-arrow-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                <path fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                </path>
              </svg><!-- <i class="fas fa-arrow-right"></i> -->261K</a>
            <a href=""><svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor"
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg><!-- <i class="fas fa-heart"></i> -->3315</a>
            <a href=""><svg class="svg-inline--fa fa-history fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor"
                  d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z">
                </path>
              </svg><!-- <i class="fas fa-history"></i> -->60</a>
            <a href=""><svg class="svg-inline--fa fa-comment-dots fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor"
                  d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                </path>
              </svg><!-- <i class="fas fa-comment-dots"></i> -->101</a>
          </div>

        </div>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="flex justify-between text-gray-500 border-b border-gray-300 text-sm p-2">
        <button class="">
          <svg class="svg-inline--fa fa-history fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor"
              d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z">
            </path>
          </svg><!-- <i class="fas fa-history"></i> -->
          Listening History
        </button>
        <button class="hover:text-black">view all</button>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="my-4 flex">
        <img class="w-1/5" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
        <div class="w-4/5 mx-2 text-xs">
          <div class="text-gray-500">Cherokee Recordings</div>
          <div class="">Dean Robert - Morning</div>
          <div class="flex justify-around">
            <a href="">➡️261K</a>
            <a href="">❤️3315</a>
            <a href="">⭕️60</a>
            <a href="">☁️101</a>
          </div>

        </div>
      </div>

      <div class="flex border-t border-gray-500">
        <div class="my-3 text-xs table-row-group">
          <div class="">
            <span class="hover:text-black"><a href="#">Legal</a></span>
            -
            <span class="hover:text-black"><a href="#">Privacy</a></span>
            -
            <span class="hover:text-black"><a href="#">Cookies</a></span>
            -
            <span class="hover:text-black"><a href="#">Imprint</a></span>
            -
            <span class="hover:text-black"><a href="#">Creator Resources</a></span>
            -
            <span class="hover:text-black"><a href="#">Blog</a></span>
            -
            <span class="hover:text-black"><a href="#">Charts</a></span>
            -
            <span class="hover:text-black"><a href="#">Popular Search</a></span>
          </div>

          <div class="mt-2 mb-20">
            Language: English (US)
          </div>

        </div>
      </div>
    </div>

  </div>




</div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import chart from './discover/chart';
import {
  VueperSlides,
  VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    }
  ]
}),
  // name: "chart",
  components: {
    chart,
    VueperSlides,
    VueperSlide,
  },

  methods: {

  },

  computed: {
    ...mapGetters({
      index: 'song/index'
    }),



  },


  ...mapActions('song', ['song/loadIndex']),
  created() {
    this.$store.dispatch('song/loadIndex')
    // this.$store.dispatch("favorite/loadLikes");

  }
}
</script>

<style lang="css" scoped>

.fa-play-circle{
  color: rgb(247, 137, 35);
}
</style>
