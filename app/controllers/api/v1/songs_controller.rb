class Api::V1::SongsController < ApplicationController
  def index
    @songs = Song.all
    @playlists = current_user.playlists
  end

  def show
    @song = Song.find(params[:id])
  end
end
