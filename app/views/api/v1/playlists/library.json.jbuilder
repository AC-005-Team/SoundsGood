json.array! @playlists do |playlist|
  json.name playlist.name
  json.user_id playlist.user_id
  json.user_name playlist.user.display_name
  json.playlist_id playlist.id
end