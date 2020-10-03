document.addEventListener('DOMContentLoaded',()=>{
  if(document.querySelector('#song_track')){
    document.querySelector('#song_track').addEventListener('change', song_value)
  }
})

function song_value(){
  if(document.querySelector('#song_track') != null ){
      const song_value = document.querySelector('#song_track').value
      const last_value = song_value.split('\\').slice(-1)
        document.querySelector('#music').textContent = last_value
  }
}
