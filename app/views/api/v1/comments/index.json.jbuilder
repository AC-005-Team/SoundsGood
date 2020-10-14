if current_user
  json.current_user do
    json.user_name current_user.display_name
    json.user_url user_path(current_user)
  end
end

json.song do
  json.duration @song_and_comments[:song].track.metadata['duration']
end

json.comments do
  json.array! @song_and_comments[:comments] do |comment|
    json.comment_id comment.id
    json.song_id comment.song_id
    json.user_id comment.user_id
    json.user_name comment.user.display_name
    json.user_url user_path(comment.user_id)
    json.user_img comment.user.avatar_url
    json.reply_id comment.reply_id
    json.content comment.content
    json.timepoint comment.timepoint
    json.created_at comment.created_at
  end
end