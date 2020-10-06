class SearchesController < ApplicationController
  before_action :find_song, only: [:like]

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
    current_user.toggle_like_song(@song)
  end
  
private

  def favorited_by?(user)
    liked_users.include?(user)
  end

  def find_song
    @song = Song.find(params[:search_id])
  end

end