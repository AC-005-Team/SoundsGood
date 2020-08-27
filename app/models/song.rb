class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
end
