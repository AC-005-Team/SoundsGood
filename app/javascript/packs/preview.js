showMyImage = function(fileInput) {
  let file = fileInput.files[0];
  let img=document.getElementById("thumbnil");
  img.file = file;
  let reader = new FileReader();
  reader.onload = (function(aImg) {
    return function(e) {
      aImg.src = e.target.result;
    };
  })(img);
  reader.readAsDataURL(file);
}
showMyAvatar = function(fileInput) {
  let file = fileInput.files[0];
  let img=document.getElementById("avatar");
  img.file = file;
  let reader = new FileReader();
  reader.onload = (function(aImg) {
    return function(e) {
      aImg.src = e.target.result;
    };
  })(img);
  reader.readAsDataURL(file);
}