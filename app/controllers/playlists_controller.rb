class PlaylistsController < ApplicationController
  before_action :find_playlist, only: [:show, :like]

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

  def show;end
  
  def like 
    current_user.toggle_like_playlist(@playlist)
    redirect_to @playlist
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :intro)
  end

  def find_playlist
    @playlist = Playlist.find(params[:id])
  end

end
