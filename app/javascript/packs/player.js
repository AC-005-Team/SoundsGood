// require("./application.js");

import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
// import APlayer from 'aplayer/dist/APlayer.min.js'
// const track_url  = document.querySelector('li:last-child a').getAttribute('href');


const ap = new APlayer({
  container: document.getElementById('player1'),
  audio: [{
    autoplay: true,
    theme: '#f18b00',
    fixed: true,
    cover: '', //required,
    title: 'yo', // Required, music title
    author: 'yo', // Required, music author
    // url: ''
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
  }]
});


// 點擊之後自動加到歌單  audio為一包json object

// const ap = new APlayer({
//     container: document.getElementById('player1'),
//     listFolded: true,
//     listMaxHeight: 30,
//     audio: [
//         {
//             name: 'name1',
//             artist: 'artist1',
//             cover: 'cover1.jpg',
//             theme: '#ebd0c2',
//             url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
//
//         },
//         {
//             name: 'name2',
//             artist: 'artist2',
//             cover: 'cover2.jpg',
//             theme: '#46718b',
//             url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/April_2019/Yung_Kartz_-_02_-_Lethal.mp3"
//         }
//     ]
// });



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
        audio: [{
          autoplay: false,
          theme: '#f18b00',
          fixed: true,
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
