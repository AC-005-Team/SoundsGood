class PlaylistsController < ApplicationController
  
  def index
    @playlists = current_user.playlists
  end

  def new
    @playlist = current_user.playlists.new
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      redirect_to user_playlists_path
    else
      render :new
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :intro)
  end

end