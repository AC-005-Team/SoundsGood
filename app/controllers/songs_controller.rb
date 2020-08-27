class SongsController < ApplicationController

  def index
    @songs = current_user.songs
  end

  def new
    @song = Song.new
  end

  def create
    @song =  current_user.songs.new(song_params)
    if @song.save
      redirect_to songs_path
    else
      render :new
    end
  end

  private

  def song_params
    params.require(:song).permit(:name, :intro, :track, :image)
  end
  
end
