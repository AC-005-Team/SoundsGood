import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

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
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
  }]
});
//立即點播放單首歌
const songs = document.querySelectorAll('.getURL');
songs.forEach((song) => {
  song.addEventListener('click', function(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    ap.pause();
    ap.list.clear();
    getPlay(id).then(val => {
      ap.list.add(val);
    });
    ap.play();
  });
});

//拿到本首歌的json
async function getPlay(id) {
  let response = await fetch(`http://127.0.0.1:3000/api/soundclown/songs/${id}`);
  let playlistTrack = await response.json();
  return playlistTrack;
};





//ADD TO PLAY NEXT by json
const addbutton = document.querySelectorAll('#addtoplay');
addbutton.forEach((song) => {
  song.addEventListener('click', function(e) {
  let id = e.currentTarget.dataset.id;
    getPlay(id).then(val => {
      ap.list.add(val);
    });
    // ap.list.add(obj);
    console.log('123');
  });
});


//play playlist by json
const playlistBtn = document.querySelector('#play_playlist');
playlistBtn.addEventListener('click', function(){
  ap.pause();
  ap.list.clear();
  getPlayList().then(val => {
    ap.list.add(val);
  });
  ap.play();
});



// read song JSON
async function getPlayList() {
  let response = await fetch('http://127.0.0.1:3000/api/soundclown/songs');
  let playlistTrack = await response.json();
  return playlistTrack;
};






const dropbtn = document.querySelectorAll('.dropbtn');
const dropDownbtn = document.querySelectorAll('#myDropdown');


for(let i = 0;  i < dropbtn.length; i++) {
  dropbtn[i].addEventListener('click', function(e){
    const $dropDown = e.currentTarget.parentNode
    $dropDown.querySelector('#myDropdown').classList.toggle('show')
  });
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
