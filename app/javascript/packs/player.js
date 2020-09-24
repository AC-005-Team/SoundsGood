// import 'aplayer/dist/APlayer.min.css';
// import APlayer from 'aplayer';
//
// //畫面一開始的播放器
// const ap = new APlayer({
//   container: document.getElementById('player1'),
//   listFolded: true,
//   audio: [{
//     autoplay: true,
//     theme: '#f18b00',
//     cover: '', //required,
//     title: '', // Required, music title
//     author: '', // Required, music author
//     url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/suRRism-Phonoethics/Lomz__Lezet/Mother_Brain/Lomz__Lezet_-_08_-_Cod.mp3"
//   }]
// });
// //立即點播放單首歌
// const songs = document.querySelectorAll('.getURL');
// if(songs){
//   songs.forEach((song) => {
//     song.addEventListener('click', function(e) {
//       e.preventDefault();
//       let id = e.currentTarget.dataset.id;
//       ap.pause();
//       ap.list.clear();
//       getPlay(id).then(val => {
//         ap.list.add(val);
//       });
//       ap.play();
//     });
//   });
// }
//
// //拿到本首歌的json
// async function getPlay(id) {
//   let response = await fetch(`http://127.0.0.1:3000/api/v1/songs/${id}`);
//   let playlistTrack = await response.json();
//   return playlistTrack;
// };
//
//
//
//
//
// //ADD TO PLAY NEXT by json
// const addbutton = document.querySelectorAll('#addtoplay');
// if (addbutton){
//   addbutton.forEach((song) => {
//     song.addEventListener('click', function(e) {
//       e.preventDefault();
//       let id = e.currentTarget.dataset.id;
//       getPlay(id).then(val => {
//         ap.list.add(val);
//       });
//     });
//   });
//
// }
//
//
//
// // read playlists JSON
// async function getPlayList(id) {
//   let response = await fetch(`http://127.0.0.1:3000/api/v1/playlists/${id}`);
//   let playlistTrack = await response.json();
//   return playlistTrack;
// };
//
// //play playlist by json
// const playlistBtn = document.querySelector('#play_playlist');
// if(playlistBtn){
//   playlistBtn.addEventListener('click', function(e){
//     let id = e.currentTarget.dataset.id;
//     ap.pause();
//     ap.list.clear();
//     getPlayList(id).then(val => {
//       ap.list.add(val);
//     });
//     ap.play();
//   });
//
// }
//




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


const heart = document.querySelectorAll(".heart");
for(var i =0, len = heart.length; i<len; i++)
{
  heart[i].onclick = function(){
  if(this.classList.contains('like_btn')){
    this.classList.remove('like_btn');
    this.classList.add('like_btn_reverse');
  } else {

    this.classList.remove('like_btn_reverse');
    this.classList.add('like_btn');
  }
}



}
