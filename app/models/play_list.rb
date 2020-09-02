class PlayList < ApplicationRecord
  belongs_to :user
  has_many :play_list_songs
  has_many :songs, through: :play_list_songs
end
