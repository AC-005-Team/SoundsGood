class Api::V1::SongsController < ApplicationController
  def index
    @songs = current_user.songs.includes(:tags)
    @playlists = current_user.playlists
  end

  def show
    @song = Song.find(params[:id])
  end
end
