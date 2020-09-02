// require("./application.js");

import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
// import APlayer from 'aplayer/dist/APlayer.min.js'
// const track_url  = document.querySelector('li:last-child a').getAttribute('href');


const ap = new APlayer({
  container: document.getElementById('player1'),
  listFolded: true,
  audio: [{
    autoplay: true,
    theme: '#f18b00',
    // fixed: true,
    cover: '', //required,
    title: 'yo', // Required, music title
    author: 'yo', // Required, music author
    // url: ''
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
  }]
});
// 點擊之後自動加到歌單  audio為一包json object


// const ap1 = new APlayer({
//     container: document.getElementById('player_withplaylist'),
//     listFolded: true,
//     listMaxHeight: 30,
//     audio:
//     [
//         {
//             name: 'name1',
//             artist: 'artist1',
//             cover: 'http://lorempixel.com/400/200',
//             theme: '#ebd0c2',
//             url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
//
//         }
//     ]
// });
//

//立即點播放單首歌
const songs = document.querySelectorAll('.getURL');
songs.forEach((song) => {
  song.addEventListener('click', function(e) {
    e.preventDefault();
    const musicURL = e.currentTarget.dataset.url;
    const author = e.currentTarget.dataset.author;
    const title = e.currentTarget.dataset.title;
    // const musicURL = e.currentTarget.attributes.href.textContent;

    const ap = new APlayer({
      container: document.getElementById('player1'),
      listFolded: true,
      // fixed: true,
      audio: [{
        autoplay: false,
        theme: '#f18b00',
        cover: 'http://lorempixel.com/400/200', //required,
        title: title,
        author: author ,
        url: musicURL
        // url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
      }]
    });


    ap.play();

  });
});




const addbutton = document.querySelectorAll('#addtoplay');

addbutton.forEach((song) => {
  song.addEventListener('click', function(e){
    let musicURL = e.currentTarget.dataset.url;
    let author = e.currentTarget.dataset.author;
    let title = e.currentTarget.dataset.title;
    const obj = {};
    obj['name']= title;
    obj['artist']= author;
    obj['cover']= 'http://lorempixel.com/400/200';
    obj['theme']= '#ebd0c2';
    obj['url']= musicURL;
    ap.list.add(obj);
  });
});


// addbutton.forEach((song) => {
//   song.addEventListener('click', addtoplay(e));
// });
//
//
// function addtoplay(e){
//   let musicURL = e.currentTarget.dataset.url;
//   let author = e.currentTarget.dataset.author;
//   let title = e.currentTarget.dataset.title;
//   const obj = {};
//   obj['name']= title;
//   obj['artist']= author;
//   obj['cover']= 'http://lorempixel.com/400/200';
//   obj['theme']= '#ebd0c2';
//   obj['url']= musicURL;
//   ap.list.add(obj);
//
// }
