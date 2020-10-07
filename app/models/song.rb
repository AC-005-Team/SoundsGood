class Song < ApplicationRecord
  include SongUploader::Attachment[:track]
  include CoverImageUploader::Attachment[:image]
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :playlists_songs
  has_many :playlists, through: :playlists_songs
  
  has_many :favorite_songs, dependent: :destroy
  has_many :liked_users, through: :favorite_songs, source: :user

  has_many :reposts, as: :repostable
  has_many :reposted_users, through: :reposts, source: :user
  after_save :create_peak_data
  
  has_many :songs_tags, dependent: :destroy
  has_many :tags, through: :songs_tags

 

  def added_by?(playlist)
    playlists.include?(playlist)
  end

  def favorited_by?(user)
    liked_users.include?(user)
  end

  def reposted_by?(user)
    reposted_users.include?(user)
  end

  def tag_items
    tags.map(&:name)
  end
  
  def tag_items=(names)
    self.tags = names.map do|item|
      next if item.blank?
      
      Tag.where(name: item.strip).first_or_create!
    end.compact
  end

  def get_filename #拿到本首歌曲的s3檔案名，用來取得音波圖
    self.track_data.match(/[a-zA-Z0-9]{32}/)[0]
  end

  private
  def create_peak_data #上傳歌曲時，打api到GCP node.js server
    p '------calling node.js------'
    HTTP.post("https://peaks.soundsgood.world/api/v1/soundwavify", :json => { :filetype => "song_peaks", :filepath => self.track_url })
    p '------------end------------'
  end

end
