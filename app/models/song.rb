class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :comments
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs
  
  has_many :favorite_songs
  has_many :liked_users, through: :favorite_songs, source: :user

  has_many :reposts, as: :repostable
  has_many :reposted_users, through: :reposts, source: :user
  
  def added_by?(playlist)
    playlists.include?(playlist)
  end

  def favorited_by?(user)
    liked_users.include?(user)
  end

  def reposted_by?(user)
    reposted_users.include?(user)
  end
end
