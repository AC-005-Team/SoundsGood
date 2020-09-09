class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlists_songs
  has_many :songs, through: :playlists_songs
  
  def toggle_add(song)
    if songs.include?(song)
      songs.destroy(song)
    else
      songs << song
    end
  end
end
