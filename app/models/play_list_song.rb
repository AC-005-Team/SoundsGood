class PlayListSong < ApplicationRecord
  belongs_to :play_list
  belongs_to :song
end
