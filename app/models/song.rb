class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs

  has_many :comments
  has_many :songs_tags
  has_many :tags, through: :songs_tags

  def tag_items
    tags.map(&:name)
  end
  
  def tag_items=(names)
    self.tags = names.map{|item|
      Tag.where(name: item.strip).first_or_create! unless item.blank?}.compact
  end

end
