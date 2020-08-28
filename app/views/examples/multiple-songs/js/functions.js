Amplitude.init({
  "songs": [
    {
      "name": "Offcut #6",
      "artist": "Little People",
      "album": "We Are But Hunks of Wood Remixes",
      "url": "https://djl.s3.ap-northeast-1.amazonaws.com/djl/a72222532e6202176941ac56af8d09a0.mp3",
      "cover_art_url": "../album-art/we-are-but-hunks-of-wood.jpg"
    },

  ]
});

document.getElementById('song-played-progress-1').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 0 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-2').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 1 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});
