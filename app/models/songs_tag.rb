class SongsTag < ApplicationRecord
  belongs_to :song
  belongs_to :tag
end
