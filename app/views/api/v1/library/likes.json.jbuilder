json.(@like_songs) do |song|
  json.song_id song.id
  json.user do
    json.user_id song.user.id
    json.display_name song.user.display_name
    json.avatar song.user.avatar_url
  end


json.audio do

    json.name song.name
    json.artist song.intro
    json.cover song.image_url
    json.theme '#ebd0c2'
    json.url song.track_url
end
end
