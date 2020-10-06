import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css"
import "select2";

$(document).on("DOMContentLoaded", function() {
  $(".tag_list").select2({
    tags: true,
    tokenSeparators: [",", " "],
  });
});
