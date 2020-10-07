class SearchesController < ApplicationController

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
    @Playlists = Playlist.name_search("name", params[:search])
  end

  def like
    @song = Song.find(params[:search_id])
    current_user.toggle_like_song(@song)
  end

  def follow
    @user = User.find(params[:search_id])
    current_user.toggle_follow(@user)
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

end