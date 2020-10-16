json.(@unfollow_users) do |unfollow_user|
  json.user_id unfollow_user.id
  json.display_name unfollow_user.display_name
  json.avatar unfollow_user.avatar_url
end
