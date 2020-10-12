json.array! @items  do |item|
  json.user_name item.user.display_name #po文的人
  json.user_id item.user.id #po文的人的id
  json.created_at item.created_at #po文的時間
  json.media_id item.id #po的playlist或song的id
  case 
  when item.class == Song
    json.media_type 'Song' #po的類別是song
    json.name item.name    #po的內容名字
    json.path item.track_url #data-path for waveform
    json.filename item.get_filename #data-filename for waveform
  when item.class == Playlist
    json.media_type 'Playlist'  #po的類別是playlist
    json.name item.name    #po的內容名字
    json.path item.songs[0].track_url #data-path for waveform
    json.filename item.songs[0].get_filename #data-filename for waveform
  else
    media = item.repostable_type.constantize.find(item.repostable_id) #找到repost的實體(song或playlist)
    json.media_type 'Repost' #po的類別是repost
    json.repost_type item.repostable_type #repost的類別是song或playlist
    json.name media.name #repost的內容名字
    json.owner_name media.user.display_name #此實體的擁有者
    json.owner_id media.user.id #此實體擁有者的id
    if item.repostable_type == 'Song'
      json.path media.track_url #data-path for waveform
      json.filename media.get_filename #data-filename for waveform
    else
      json.path media.songs[0].track_url #data-path for waveform
      json.filename media.songs[0].get_filename #data-filename for waveform
    end
  end
end