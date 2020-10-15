class HomeController < ApplicationController
  before_action :authenticate_user!, except: [:index, :discover]
  before_action :find_song

  def index;end

  def discover
    render layout: "spa"
  end

  def stream

    @users = [current_user]+current_user.followees.includes(:songs, :playlists, :reposts).order(created_at: :desc)
    @items_all = []
    @users.each do |user|
      @items_all += user.reposts.includes(:user, :repostable).where(repostable_type: "Song") + user.songs
    end
    @items = @items_all.sort_by!{|item| item.created_at}.reverse!
    respond_to do |format|
      format.json
      format.html
    end
    render layout: "spa"
  end

  private

  def find_song
    @songs = Song.all.includes(:tags)
  end


end
