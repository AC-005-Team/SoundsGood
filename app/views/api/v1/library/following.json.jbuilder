json.array! @followees do |followee|
    json.id followee.id
    json.image followee.avatar_url
    json.name followee.display_name
end
