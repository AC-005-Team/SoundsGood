class User < ApplicationRecord
  include ImageUploader::Attachment[:avatar]
  include ImageUploader::Attachment[:header]
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :songs
  has_many :play_lists
end
