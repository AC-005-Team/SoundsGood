class Tag < ApplicationRecord
  has_many :songs_tags
  has_many :songs, through: :songs_tags
end
