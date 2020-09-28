json.(@playlist, :id, :name)
json.audio do
   json.array! @songs do |song|
    json.title song.name
    json.artist song.intro
    json.cover song.image_url
    json.theme '#ebd0c2'
    json.url song.track_url
    json.id song.id
end
end


\
