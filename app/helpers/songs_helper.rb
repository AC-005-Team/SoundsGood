module SongsHelper

  def playlists_song?(song)
    song.playlists.count > 0 && song.playlists
  end
  
  def display_tag_list(tags)
    result = ""
    tags.map(&:name).each do |name|
      result << "<button type='button' class='btn btn-outline-success'>#{name}</button> "
    end
    result
  end

end