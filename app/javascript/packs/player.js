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
    cover: 'http://lorempixel.com/400/200/sports/1/Dummy-Text/', //required,
    title: 'Preparation', // Required, music title
    author: 'Hans Zimmer/Richard Harvey', // Required, music author
    url: ''
    // url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
  }]
});




// function get(){
//   for(var i in document.getElementsByClassName('getURL')) {
//        var link = document.getElementsByClassName('getURL')[i];
//        link.onclick = function(e) {
//            e.preventDefault();
//            const musicURL = e.currentTarget.attributes.href.textContent;
//            console.log(musicURL);
//                   return musicURL;
//        }
//
//    };
// }


const songs = document.querySelectorAll('.getURL');
  songs.forEach((song) => {
    song.addEventListener('click', function(e) {
      e.preventDefault();
      const musicURL = e.currentTarget.attributes.href.textContent;

      const ap = new APlayer({
        container: document.getElementById('player1'),
        audio: [{
          autoplay: false,
          theme: '#f18b00',
          cover: 'http://lorempixel.com/400/200/sports/1/Dummy-Text/', //required,
          title: 'Preparation',
          author: 'Hans Zimmer/Richard Harvey',
          url: musicURL
          // url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
        }]
      });

      ap.play();

    });
  });
