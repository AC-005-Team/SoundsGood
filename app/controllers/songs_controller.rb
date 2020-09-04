class SongsController < ApplicationController

  before_action :find_song, only: [:show, :destroy]
  before_action :find_playlist_song, only: [:list_toggle]

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
    if @playlist_song.present?
      @playlist_song.destroy
    else
      PlayListSong.create(play_list_id: params[:list_id], song_id: params[:id])
    end
  
    redirect_to user_songs_path(current_user.id)
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
  
  def find_playlist_song
    @playlist_song = PlayListSong.find_by(
      play_list_id: params[:list_id],
      song_id: params[:id]
    )
  end
end
