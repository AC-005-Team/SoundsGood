class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :play_list_songs
  has_many :play_lists, through: :play_list_songs

  has_many :comments
end
