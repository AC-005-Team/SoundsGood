class HomeController < ApplicationController
  before_action :find_song

  def index;end

  def discover;end

  def stream
    @users = [current_user]+current_user.followees.includes(:songs, :playlists, :reposts).order(created_at: :desc)
    @items = []
    @users.each do |user|
      @items += user.songs+user.playlists+user.reposts.includes(:user, :repostable)
    end
    @items.sort_by!{|item| item.created_at}.reverse!
    respond_to do |format|
      format.json
      format.html
    end
  end

  private

  def find_song
    @songs = Song.all.includes(:tags)
  end


end
