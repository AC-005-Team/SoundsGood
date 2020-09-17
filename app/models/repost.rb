class Repost < ApplicationRecord
  belongs_to :user
  belongs_to :repostable, polymorphic: true
end
