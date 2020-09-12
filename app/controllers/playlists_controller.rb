class PlaylistsController < ApplicationController

  def index
    @playlists = current_user.playlists
  end

  def new
    @playlist = current_user.playlists.new
  end

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def create
    @playlist = current_user.playlists.new(list_params)
    if @playlist.save
      redirect_to user_playlists_path
    else
      render :new
    end
  end

  private

  def list_params
    params.require(:playlist).permit(:name, :intro)
  end

end
