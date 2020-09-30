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

end