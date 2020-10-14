json.index (@songs) do |song|
  json.song_id song.id
  json.likes song.favorited_by?(current_user)
  json.audio do
      json.name song.name
      json.artist song.intro
      json.cover song.image_url
      json.theme '#ebd0c2'
      json.url song.track_url
  end
end

json.tag (@tag1_songs) do |s|
  json.song_id s.id
  json.likes s.favorited_by?(current_user)
  json.audio do
      json.name s.name
      json.artist s.intro
      json.cover s.image_url
      json.theme '#ebd0c2'
      json.url s.track_url
  end
end
