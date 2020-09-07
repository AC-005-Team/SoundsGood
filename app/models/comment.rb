class Comment < ApplicationRecord
  validates :content, presence: true
  
  belongs_to :user
  belongs_to :song

  has_many :replies, class_name: "Comment", foreign_key: "reply_id"
  belongs_to :reply, class_name: "Comment", optional: true
end
