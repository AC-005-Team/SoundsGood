class Repost < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :repostable, polymorphic: true, counter_cache: true
end
