namespace :db do
  desc "set fake img for those who didn't have"
  task set_fake_img: :environment do
    puts 'updating...'
    User.all.each do |user|
      user.update(avatar_data: '{"id":"user/18/avatar/baf5327d1a6cf68c60a709e42af32a53.png","storage":"store","metadata":{"filename":"default_user_image.png","size":19040,"mime_type":"image/png"}}') if user.avatar_data == nil
    end
    Song.all.each do |song|
      song.update(image_data: '{"id":"song/21/image/325156981df28842ea72c92d8984b914.png","storage":"store","metadata":{"filename":"default_song_image.png","size":70298,"mime_type":"image/png"}}') if song.image_data == nil
    end
    Playlist.all.each do |playlist|
      playlist.destroy if playlist.songs == []
    end
    puts 'mission completed'
  end
end
