showMyImage = function(fileInput) {
  var file = fileInput.files[0];
  var img=document.getElementById("thumbnil");
  img.file = file;
  var reader = new FileReader();
  reader.onload = (function(aImg) {
    return function(e) {
      aImg.src = e.target.result;
    };
  })(img);
  reader.readAsDataURL(file);
}
showMyAvatar = function(fileInput) {
  var file = fileInput.files[0];
  var img=document.getElementById("avatar");
  img.file = file;
  var reader = new FileReader();
  reader.onload = (function(aImg) {
    return function(e) {
      aImg.src = e.target.result;
    };
  })(img);
  reader.readAsDataURL(file);
}