class Api::V1::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end


  def library
    @playlists = current_user.playlists.concat(current_user.like_playlists)
  end
  def index
    @playlists = current_user.playlists
  end

end
