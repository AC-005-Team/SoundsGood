import Rails from '@rails/ujs'

document.addEventListener('turbolinks:load', function (){
  document.querySelector('#search').addEventListener('keyup', search)
})

function search(){
  let search_context = document.querySelector('#search_bar')
  Rails.fire(search_context, 'submit')
}
