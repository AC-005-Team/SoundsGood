class SearchesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :result]
  before_action :find_song, only: [:like, :repost]

  def show
    return if params[:search].blank?
    
    @users = User.name_search("display_name", params[:search]).map(&:display_name)
    @songs = Song.name_search("name", params[:search]).map(&:name)
    @Playlists = Playlist.name_search("name", params[:search]).map(&:name)
    @result = @users | @songs | @Playlists
    respond_to do |format|
      format.json { render json: @result }
    end
  end

  def result
    return if params[:search].blank? 

    @params_search = params[:search] 
    @users = User.name_search("display_name", params[:search])
    @songs = Song.name_search("name", params[:search]).includes(:tags)
    @playlists = Playlist.name_search("name", params[:search])
  end

  def like
    current_user.toggle_like_song(@song)
  end

  def follow
    @user = User.find(params[:search_id])
    current_user.toggle_follow(@user)
  end

  def repost
    current_user.toggle_repost_song(@song)
  end
  
private

  def toggle_follow(followee)
    if follows?(followee)
      followees.destroy(followee)
    else
      followees << followee
    end
  end

  def follows?(followee)
    followees.include?(followee)
  end

  def favorited_by?(user)
    liked_users.include?(user)
  end

  def reposted_by?(user)
    reposted_users.include?(user)
  end

  def find_song
    @song = Song.find(params[:search_id])
  end

end