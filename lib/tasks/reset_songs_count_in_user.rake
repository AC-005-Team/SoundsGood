namespace :db do
  desc 'Reset counter cache of all count.'
  task update_all_counter: :environment do
    puts 'updating...'
    User.all.each do |user|
      User.reset_counters(user.id, :songs)
    end
    Song.all.each do |song|
      Song.reset_counters(song.id, :reposts)
      Song.reset_counters(song.id, :comments)
    end
    puts 'mission completed'
  end
end