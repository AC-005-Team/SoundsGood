class PlaylistsController < ApplicationController
  before_action :find_playlist, only: [:show, :like, :repost, :destroy]

  def index
    @playlists = current_user.playlists
  end

  def show
    render layout: "spa"
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    @playlists = current_user.playlists
      respond_to do |format|
        if @playlist.save
          format.js { @song = Song.find(params[:song_id])
          @playlist.songs << @song }
        else
          # render :new
        end
      end
  end

  def destroy 
    @playlist.destroy
    redirect_to user_path(current_user.id)
  end

  def like
    current_user.toggle_like_playlist(@playlist)
    redirect_to @playlist
  end

  def repost
    current_user.toggle_repost_playlist(@playlist)
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
