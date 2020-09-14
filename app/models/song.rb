class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :comments
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs
  
  has_many :favorite_songs
  has_many :liked_users, through: :favorite_songs, source: :user
  
  def favorited_by?(user)
    liked_users.include?(user)
  end

  def added_by?(playlist)
    playlists.include?(playlist)
  end
end
