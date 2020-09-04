module SongsHelper

  def playlists_song?(song)
    song.play_lists.count > 0
  end
  
end