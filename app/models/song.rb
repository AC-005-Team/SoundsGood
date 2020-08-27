class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  belongs_to :user
end
