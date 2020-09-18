class Api::V1::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end

  def index
    @playlists = current_user.playlists
  end


end
