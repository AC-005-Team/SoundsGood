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
    title: 'yo', // Required, music title
    author: 'yo', // Required, music author
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
  }]
});
//立即點播放單首歌
const songs = document.querySelectorAll('.getURL');
songs.forEach((song) => {
  song.addEventListener('click', function(e) {
    e.preventDefault();
    const musicURL = e.currentTarget.dataset.url;
    const author = e.currentTarget.dataset.author;
    const title = e.currentTarget.dataset.title;
    ap.pause();
    ap.list.clear();
    ap.list.add({
      autoplay: false,
      theme: '#f18b00',
      cover: 'http://lorempixel.com/400/200', //required,
      title: title,
      author: author,
      url: musicURL
    });
    ap.play();
  });
});


//ADD TO PLAY NEXT
const addbutton = document.querySelectorAll('#addtoplay');
addbutton.forEach((song) => {
  song.addEventListener('click', function(e) {
    let musicURL = e.currentTarget.dataset.url;
    let author = e.currentTarget.dataset.author;
    let title = e.currentTarget.dataset.title;
    const obj = {};
    obj['name'] = title;
    obj['artist'] = author;
    obj['cover'] = 'http://lorempixel.com/400/200';
    obj['theme'] = '#ebd0c2';
    obj['url'] = musicURL;
    ap.list.add(obj);
  });
});

//play playlist
const playlistBtn = document.querySelector('#play_playlist');
playlistBtn.addEventListener('click', function(){
  ap.pause();
  ap.list.clear();
  getPlayList().then(val => {
    ap.list.add(val);
  });
  ap.play();
});



// read our JSON
async function getPlayList() {
  let response = await fetch('http://127.0.0.1:3000/songs.json');
  let playlistTrack = await response.json();
  return playlistTrack;
};
