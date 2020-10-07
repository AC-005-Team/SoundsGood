# json.array! @playlists, :id, :name, :intro,
# json.array! @playlist.songs, :id, :name, :intro
json.array! @playlists do |playlist|
  json.id playlist.id
  json.name playlist.name
  json.intro playlist.intro
  json.img_url playlist.songs.first.image_url
  json.user_id playlist.user_id
  json.user_name playlist.user.display_name
end
