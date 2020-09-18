class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs
  
  has_many :favorite_songs, dependent: :destroy
  has_many :liked_users, through: :favorite_songs, source: :user

  has_many :reposts, as: :repostable
  has_many :reposted_users, through: :reposts, source: :user
  
  has_many :songs_tags, dependent: :destroy
  has_many :tags, through: :songs_tags
  def added_by?(playlist)
    playlists.include?(playlist)
  end

  def favorited_by?(user)
    liked_users.include?(user)
  end

  def tag_items
    tags.map(&:name)
  end
  
  def tag_items=(names)
    self.tags = names.map do|item|
      next if item.blank?
      
      Tag.where(name: item.strip).first_or_create!
    end.compact
  end
  
  def reposted_by?(user)
    reposted_users.include?(user)
  end
end
