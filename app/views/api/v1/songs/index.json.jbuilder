json.index (@songs) do |song|
  json.song_id song.id
  json.likes song.favorited_by?(current_user)
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

json.tag1 (@tag1_songs) do |s|
  json.song_id s.id
  json.likes s.favorited_by?(current_user)
  json.audio do
      json.name s.name
      json.artist s.intro
      json.cover s.image_url
      json.theme '#ebd0c2'
      json.url s.track_url
  end
  json.user do
    json.user_id s.user.id
    json.display_name s.user.display_name
    json.avatar s.user.avatar_url
  end
end
