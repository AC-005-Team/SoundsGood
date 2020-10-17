class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlists_songs, dependent: :destroy
  has_many :songs, through: :playlists_songs

  has_many :favorite_playlists
  has_many :liked_users, through: :favorite_playlists, source: :user

  has_many :reposts, as: :repostable
  has_many :reposted_users, through: :reposts, source: :user

  def toggle_add_to_playlist(song)
    if songs.include?(song)
      songs.destroy(song)
    else
      songs << song
    end
  end
  
  def favorited_by?(user)
    liked_users.include?(user)
  end

  def reposted_by?(user)
    reposted_users.include?(user)
  end
end
