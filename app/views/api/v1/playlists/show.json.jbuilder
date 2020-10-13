json.(@playlist, :id, :name)
json.playlist_user @playlist.user.avatar_url
json.audio do
   json.array! @songs do |song|
    json.title song.name
    json.artist song.intro
    json.cover song.image_url
    json.theme '#ebd0c2'
    json.url song.track_url
    json.id song.id
    json.user song.user.display_name
    json.user_cover song.user.avatar_url
end
end

json.first_cover @songs.first.image_url
