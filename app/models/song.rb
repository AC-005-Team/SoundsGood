class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs
end
