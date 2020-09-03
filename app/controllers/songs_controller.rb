class SongsController < ApplicationController

  before_action :find_song, only: [:show, :destroy]

  def index
    @songs = current_user.songs
    @play_lists = current_user.play_lists
  end

  def new
    @song = Song.new
  end

  def create
    @song =  current_user.songs.new(song_params)
    if @song.save
      redirect_to user_songs_path
    else
      render :new
    end
  end

  def show; end

  def destroy
    @song.destroy
    redirect_to user_songs_path(current_user.id)
  end

  def list_toggle
    if PlayListSong.find_by(play_list_id: params[:list_id], song_id: params[:id])
      PlayListSong.find_by(play_list_id: params[:list_id], song_id: params[:id]).destroy
      redirect_to user_songs_path(current_user.id)
    else
      PlayListSong.create(play_list_id: params[:list_id], song_id: params[:id])
      redirect_to user_songs_path(current_user.id)
    end
  end

  def lists
    @play_lists = current_user.play_lists
    @songs = current_user.songs
    @song_id = params[:id]
  end

  private

  def song_params
    params.require(:song).permit(:name, :intro, :track, :image)
  end
  
  def find_song
    @song = Song.find(params[:id])
  end

end
