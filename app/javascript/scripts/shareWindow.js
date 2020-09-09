export function shareWindow(){
  var currentSharing = 'http://google.com'
  var songname = 'name'
  var songtitle = 'title'
  var artist = 'artist'
  const shareTwitter = document.querySelector('.share-twitter')
  const shareFacebook = document.querySelector('.share-facebook')

  shareTwitter.addEventListener('click', () => {
    console.log('clicked')
    window.open(`https://twitter.com/intent/tweet?url=${currentSharing}&text=Have%20you%20heard%20%E2%80%98${songname}%20-%20${songtitle}%E2%80%99%20by%20${artist}%20on%20%23SoundCloud%3F%20%23np&related=soundcloud`,'','height=400,width=600,top=200,screenX=200,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
  })


  shareFacebook.addEventListener('click', () => {
    console.log('clicked')
    window.open(getFacebookUrl(),'','height=400,width=600,top=200,screenX=200,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
  })
  
  function getFacebookUrl(){
    return `https://www.facebook.com/sharer/sharer.php?u=${currentSharing}`
  }
  
}

//https://soundcloud.com/naoyakaorudfsdfsf/w7ck7-norcn#t=0:23

//https://twitter.com/intent/tweet?url=https%3A//soundcloud.com/heldeeprecords/wongo-real-love-feat-mia-milla-out-now&text=Have%20you%20heard%20%E2%80%98Wongo%20-%20Real%20Love%20(feat%20Mia%20Milla)%20%5BOUT%20NOW%5D%E2%80%99%20by%20Heldeep%20Records%20on%20%23SoundCloud%3F%20%23np&related=soundcloud
