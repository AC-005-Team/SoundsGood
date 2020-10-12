document.addEventListener('DOMContentLoaded', function(){
  const all_btn = document.querySelector('.all_btn')
  const track_btn = document.querySelector('.track_btn')
  const reposts_btn = document.querySelector('.reposts_btn')
  const playlist_btn = document.querySelector('.playlist_btn')
  if( reposts_btn ){
    const all_temp = document.querySelectorAll('.all_template')
    const track_temp = document.querySelectorAll('.track_template')
    const repost_temp = document.querySelectorAll('.repost_template')
    const playlist_temp = document.querySelectorAll('.playlist_template')
    all_btn.addEventListener('click', function(){
      all_btn.classList.add('text-orange-600')
      track_btn.classList.remove('text-orange-600')
      reposts_btn.classList.remove('text-orange-600')
      playlist_btn.classList.remove('text-orange-600')
      show(all_temp)
      hidden(track_temp)
      hidden(repost_temp)
      hidden(playlist_temp)
    })
    track_btn.addEventListener('click', function(){
      track_btn.classList.add('text-orange-600')
      all_btn.classList.remove('text-orange-600')
      reposts_btn.classList.remove('text-orange-600')
      playlist_btn.classList.remove('text-orange-600')
      show(track_temp)
      hidden(all_temp)
      hidden(repost_temp)
      hidden(playlist_temp)
    })
    reposts_btn.addEventListener('click', function(){
      reposts_btn.classList.add('text-orange-600')
      track_btn.classList.remove('text-orange-600')
      all_btn.classList.remove('text-orange-600')
      playlist_btn.classList.remove('text-orange-600')
      show(repost_temp)
      hidden(track_temp)
      hidden(all_temp)
      hidden(playlist_temp)
    })
    playlist_btn.addEventListener('click', function(){
      playlist_btn.classList.add('text-orange-600')
      track_btn.classList.remove('text-orange-600')
      reposts_btn.classList.remove('text-orange-600')
      all_btn.classList.remove('text-orange-600')
      show(playlist_temp)
      hidden(track_temp)
      hidden(repost_temp)
      hidden(all_temp)
    })
  }
})

function hidden(target){
  target.forEach(function(template){template.classList.add('hidden')})
}

function show(target){
  target.forEach(function(template){template.classList.remove('hidden')})
}