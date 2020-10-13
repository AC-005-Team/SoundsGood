
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { waveShow } from "../scripts/wave";
let waveProgress, playingDuration, waveformWidth, secOfFourth
//畫面一開始的播放器
const ap = new APlayer({
  container: document.getElementById('player1'),
  listFolded: true,
  audio: [{
    autoplay: true,
    theme: '#f18b00',
    cover: '', //required,
    title: '', // Required, music title
    author: '', // Required, music author
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/suRRism-Phonoethics/Lomz__Lezet/Mother_Brain/Lomz__Lezet_-_08_-_Cod.mp3"
  }]
});
waveShow(ap)
//立即點播放單首歌
const songs = document.querySelectorAll('.play-btn');
if(songs){
  songs.forEach((song) => {
    song.addEventListener('click', function(e) {
      let playing = ap.container.dataset.playing
      let id = e.currentTarget.dataset.id;
      waveProgress = document.querySelector(`.waveform-wrap[data-id="${id}"]>.waveform>wave>wave`)
      getPlay(id).then(val=>{
        if(playing!==id){
          if(waveProgress){
            waveProgress.style.width = ''
            waveformWidth = waveProgress.parentNode.parentNode.parentNode.offsetWidth
          }
          playingDuration = val.audio.duration
          secOfFourth = 0
          ap.pause();
          ap.list.clear();
          ap.list.add(val.audio);
          ap.play();
          ap.container.setAttribute('data-playing', id)
          addPlayedTime(id)
        } else {
          ap.toggle()
        }
      })
    });
  });
}
const waves = document.querySelectorAll('.waveform-wrap')
if(waves){
  waves.forEach( wave => {
    wave.addEventListener('click', function(e) {
      // e.preventDefault();
      let playing = ap.container.dataset.playing
      let id = e.currentTarget.dataset.id;
      let node = e.currentTarget
      waveformWidth = node.parentNode.offsetWidth
      getPlay(id).then(val=>{ // @todo: 確認api是否有變動
        playingDuration = val.audio.duration
        if(playing!==id){
          if(waveProgress){
            waveProgress.style.width = ''
          }
          secOfFourth = 0
          waveProgress = wave.querySelector('.waveform>wave>wave')
          ap.pause();
          ap.list.clear()
          ap.list.add(val.audio)
          ap.play();
          addPlayedTime(id)
          ap.container.setAttribute('data-playing', id)
        } else {
          ap.play()
          secOfFourth = getSec(val.audio, e, node)
          ap.seek(getSec(val.audio, e, node))
        }
      })
    });
  })
  ap.on('timeupdate', () => {
    secOfFourth += 0.25
    waveProgress.style.width = widthCalc(secOfFourth)
  })
  ap.on('ended', () => {
    secOfFourth = 0
  })
}
const aplayerBar = document.querySelector('.aplayer-bar-wrap')
if (aplayerBar) {
  aplayerBar.addEventListener('click', (e) => {
    let playedSec = document.querySelector('.aplayer-ptime').textContent
    let playedSecAry = playedSec.split(':')
    if(playedSecAry.length == 3 ) {
      secOfFourth = parseInt(playedSecAry[0], 10)*60*60 + parseInt(playedSecAry[1], 10)*60 + parseInt(playedSecAry[2], 10)
    } else {
      secOfFourth = parseInt(playedSecAry[0], 10)*60 + parseInt(playedSecAry[1], 10)
    }
    waveProgress.style.width = widthCalc(secOfFourth)
  })
}
// calculates progress of .25 second
function widthCalc(secOfFourth){
  return `${waveformWidth/playingDuration*secOfFourth}px`
}
function addPlayedTime(id){
  const hosts = window.location.origin
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content
  fetch(`${hosts}/songs/${id}/add_played_times`, {
    method: 'PATCH',
    headers: {
    'x-csrf-token': csrfToken
    }
  })
  .then(response => {
    if(response.ok){
      const played_times = document.querySelectorAll(`.played_times_comments${id}`)
      if(played_times){
        played_times.forEach((num)=>{
          num.textContent++
        })
      }
    }else{
      console.error('error')
    }
  })
}
// returns certain time of song, where was clicked on wave
function getSec(val, e, node){
  let duration = val.duration
  let timepoint = e.offsetX
  let totalWidth = node.parentNode.offsetWidth
  return Math.round(timepoint/totalWidth*duration)
}
//拿到本首歌的json
async function getPlay(id) {
  let hosts = window.location.origin
  let response = await fetch(`${hosts}/api/v1/songs/${id}`);
  let playlistTrack = await response.json();
  return playlistTrack;
};

//ADD TO PLAY NEXT by json
const addbutton = document.querySelectorAll('#addtoplay');
if (addbutton){
  addbutton.forEach((song) => {
    song.addEventListener('click', function(e) {
      e.preventDefault();
      let id = e.currentTarget.dataset.id;
      getPlay(id).then(val => {
        ap.list.add(val.audio);
      });
    });
  });
}
// read playlists JSON
async function getPlayList(id) {
  let hosts = window.location.origin
  let response = await fetch(`${hosts}/api/v1/playlists/${id}`);
  let playlistTrack = await response.json();
  return playlistTrack;
};
//play playlist by json
const playlistBtn = document.querySelector('#play_playlist');
if(playlistBtn){
  playlistBtn.addEventListener('click', function(e){
    let id = e.currentTarget.dataset.id;
    ap.pause();
    ap.list.clear();
    getPlayList(id).then(val => {
      ap.list.add(val.audio);
    });
    ap.play();
  });

}
const dropbtn = document.querySelectorAll('.dropbtn');
const dropDownbtn = document.querySelectorAll('#myDropdown');
if (dropbtn){
  for(let i = 0;  i < dropbtn.length; i++) {
    dropbtn[i].addEventListener('click', function(e){
      console.log("hihihihii")
      const $dropDown = e.currentTarget.parentNode
      $dropDown.querySelector('#myDropdown').classList.toggle('show')
    });
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}