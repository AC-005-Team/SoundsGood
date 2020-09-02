class SongsController < ApplicationController

  before_action :find_song, only: [:show, :destroy]

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

  def show; end

  def destroy
    @song.destroy
    redirect_to songs_path
  end

  private

  def song_params
    params.require(:song).permit(:name, :intro, :track, :image)
  end
  
  def find_song
    @song = Song.find(params[:id])
  end
end
