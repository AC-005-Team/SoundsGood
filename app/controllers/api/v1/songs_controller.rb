class Api::V1::SongsController < ApplicationController
  def index
    @songs = Song.all.order(id: :desc)
    @playlists = current_user.playlists
    @tag1_songs = Tag.find_by(name: "coding").songs
  end

  def show
    @song = Song.find(params[:id])
    if current_user 
      @playlists = current_user.playlists 
    else
      @playlists = []
    end
  end

  def add_to_playlist
    @playlist = current_user.playlists.find(params[:playlist_id])
    @playlist.toggle_add_to_playlist(@song)
    respond_to do |format|
      #不知道為什麼會redirect，先註解
      # format.html {redirect_to @song}
      format.json {render json: {status: @song.added_by?(@playlist)}}
    end
  end
end
