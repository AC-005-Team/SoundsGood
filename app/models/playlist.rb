class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlists_songs
  has_many :songs, through: :playlists_songs

  has_many :favorite_playlists
  has_many :liked_users, through: :favorite_playlists, source: :user
  
  def favorited_by?(user)
    liked_users.include?(user)
  end

  def toggle_add_to_playlist(song)
    if songs.include?(song)
      songs.destroy(song)
    else
      songs << song
    end
  end
end
