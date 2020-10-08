import "bootstrap"
import "select2"

$(document).on('DOMContentLoaded', function() {
  $(".tag_list").select2({
    tags: true,
    tokenSeparators: [',', ' ']
  })
})

