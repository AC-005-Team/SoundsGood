class HomeController < ApplicationController
  before_action :find_song
  
  def index;end
  
  def discover;end
  
  def stream
    @users = [current_user]+current_user.followees.includes(:songs, :playlists, :reposts).order(created_at: :desc)
    # @followees = current_user.followees.includes(:songs, :playlists, :reposts).order(created_at: :desc)
    respond_to do |format|
      format.json
    end
  end
  
  private
  
  def find_song
    @songs = Song.all.includes(:tags)
  end

end
