module SongsHelper

  def favorite_song?(song)
    song.play_lists.count > 0
  end
  
end