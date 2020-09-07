module SongsHelper

  def playlists_song?(song)
    song.playlists.count > 0 && song.playlists
  end
  
end