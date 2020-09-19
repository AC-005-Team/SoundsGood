class SearchesController < ApplicationController

  def show
    return if params[:search].blank?
    
    @content = params[:search].downcase
    @users = User.name_search("display_name", @content).map(&:display_name)
    @songs = Song.name_search("name", @content).map(&:name)
    @Playlists = Playlist.name_search("name", @content).map(&:name)
    @result = @users | @songs | @Playlists
    respond_to do |format|
      format.html
      format.json { render json: @result }
    end
  end

  def result
    return if params[:search].blank? 
    puts params
    @name = params[:search].downcase
    @users = User.name_search("display_name", @name)
    @songs = Song.name_search("name", @name).includes(:tags)
    @Playlists = Playlist.name_search("name", @name)
  end

end