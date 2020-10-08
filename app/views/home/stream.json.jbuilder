json.array! @users do |user|
  json.created_at 
  json.array! user.songs do |song|
    json.type 'song'
    json.display_name user.display_name
    json.name song.name
    json.created_at song.created_at
  end
  json.array! user.playlists do |playlist|
    json.type 'playlist'
    json.display_name user.display_name
    json.name playlist.name
    json.created_at playlist.created_at
  end
  json.array! user.repost_songs do |song|
    json.type 'repost'
    json.repost_type 'song'
    json.display_name user.display_name
    json.name song.name
    json.created_at song.created_at
  end
  json.array! user.repost_playlists do |playlist|
    json.type 'repost'
    json.repost_type 'playlist'
    json.display_name user.display_name
    json.name playlist.name
    json.created_at playlist.created_at
  end
end