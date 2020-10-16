json.song_id @song.id
json.user do
  json.id @song.user.id
  json.display_name @song.user.display_name
  json.avatar  @song.user.avatar_url
end

json.audio do
  json.name @song.name
  json.artist @song.intro
  json.cover @song.image_url
  json.theme '#ebd0c2'
  json.url @song.track_url
  json.duration @song.track.metadata['duration']
end
json.playlists @playlists do |playlist|
    json.playlist_id playlist.id
    json.name playlist.name
    json.add_to_playlist @song.added_by?(playlist)
end
