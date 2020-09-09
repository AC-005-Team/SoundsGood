class Api::Soundclown::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    @songs = @playlist.songs
  end


end
