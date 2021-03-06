class User < ApplicationRecord
  include ImageUploader::Attachment[:avatar]
  include ImageUploader::Attachment[:header]
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:facebook, :google_oauth2]
  
  validates :display_name, presence: true, allow_blank: false
  
  has_one :room, dependent: :destroy
  # 自己追蹤的人
  has_many :followed_users, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy
  has_many :followees, through: :followed_users, source: :followee
  # 追蹤自己的人
  has_many :following_users, foreign_key: :followee_id, class_name: "Follow",dependent: :destroy
  has_many :followers, through: :following_users, source: :follower
    
  has_many :songs, dependent: :destroy
  has_many :playlists, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :favorite_songs, dependent: :destroy
  has_many :like_songs, through: :favorite_songs, source: :song

  has_many :favorite_playlists, dependent: :destroy
  has_many :like_playlists, through: :favorite_playlists, source: :playlist

  has_many :reposts, dependent: :destroy
  has_many :repost_songs, through: :reposts, source: :repostable, source_type: "Song"
  has_many :repost_playlists, through: :reposts, source: :repostable, source_type: "Playlist"


  def self.find_for_google_oauth2(access_token, signed_in_resource=nil)
    data = access_token.info
    user = User.find_by(google_token: access_token.credentials.token, google_uid: access_token.uid )
    return user if user.present?
    existing_user = User.find_by(email: data["email"])
    # PORO plain old ruby object
    # Service Object, Form Object
    if existing_user.present?
      update_customer!(existing_user, access_token)
      existing_user
    else
      User.create_user!(access_token)
    end
  end
  
  def toggle_follow(followee)
    if follows?(followee)
      followees.destroy(followee)
    else
      followees << followee
    end
  end

  #是否有被follower追蹤
  def followed_by?(follower)
    followers.include?(follower)
  end

  #是否有追蹤followee
  def follows?(followee)
    followees.include?(followee)
  end
  
  def toggle_like_song(song)
    if like_songs.include?(song)
      like_songs.destroy(song)
    else
      like_songs << song
    end
  end

  def toggle_like_playlist(playlist)
    if like_playlists.include?(playlist)
      like_playlists.destroy(playlist)
    else
      like_playlists << playlist
    end
  end

  def toggle_repost_song(song)
    if repost_songs.include?(song)
      repost_songs.destroy(song)
    else
      repost_songs << song
    end
  end

  def toggle_repost_playlist(playlist)
    if repost_playlists.include?(playlist)
      repost_playlists.destroy(playlist)
    else
      repost_playlists << playlist
    end
  end
  
  private
  # 如果方法會更新資料，方法要加驚嘆號提醒其他使用這個方法的人
  def self.update_customer!(user, access_token)
    user.update(
      google_uid: access_token.uid,
      google_token: access_token.credentials.token
    )
  end

  def self.create_user!(access_token)
    data = access_token.info
  
    User.create(
      display_name: data["name"],
      last_name: data["last_name"],
      email: data["email"],
      password: Devise.friendly_token[0,20],
      google_token: access_token.credentials.token,
      google_uid: access_token.uid
    )
  end

end


  # Facebook登入部分
  # def self.from_omniauth(auth)
  #   # Case 1: Find existing user by facebook uid
  #   user = User.find_by_fb_uid( auth.uid )
  #   if user
  #     user.fb_token = auth.credentials.token
  #     user.save!
  #     return user
  #   end
  #   # Case 2: Find existing user by email
  #   existing_user = User.find_by_email( auth.info.email )
  #   if existing_user
  #     existing_user.fb_uid = auth.uid
  #     existing_user.fb_token = auth.credentials.token
  #     existing_user.save!
  #     return existing_user
  #   end
  #   # Case 3: Create new password
  #   user = User.new
  #   user.fb_uid = auth.uid
  #   user.fb_token = auth.credentials.token
  #   user.email = auth.info.email
  #   user.password = Devise.friendly_token[0,20]
  #   user.name = auth.info.name
  #   user.save!
  #   return user
  # end
  