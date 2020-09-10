class SongsController < ApplicationController
  before_action :authenticate_user!, except: [:show]

  before_action :find_song, only: [:show, :destroy, :like, :add_to_playlist]
  before_action :find_playlist_song, only: [:list_toggle]

  def index
    @songs = current_user.songs
    @playlists = current_user.playlists
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

  def show 
    @comment = @song.comments.new
    @comments = @song.comments.includes(:user, replies:[:user]).where(reply_id: 0).order(id: :desc)
    @playlists = current_user.playlists
  end

  def destroy
    @song.destroy
    redirect_to user_songs_path(current_user.id)
  end

  # def list_toggle
  #   if @playlist_song.present?
  #     @playlist_song.destroy
  #   else
  #     PlaylistsSong.create(playlist_id: params[:list_id], song_id: params[:id])
  #   end
  
  #   redirect_to user_songs_path(current_user.id)
  # end

  # def lists
  #   @playlists = current_user.playlists
  #   @songs = current_user.songs
  #   @song_id = params[:id]
  # end

  def add_to_playlist
    @playlist = current_user.playlists.find(params[:playlist_id])
    @playlist.toggle_add_to_playlist(@song)
    redirect_to @song
  end
  
  def like 
    current_user.toggle_like_song(@song)
    redirect_to @song
  end
  private

  def song_params
    params.require(:song).permit(:name, :intro, :track, :image)
  end
  
  def find_song
    @song = Song.find(params[:id])
  end
  
  # def find_playlist_song
  #   @playlist_song = PlaylistsSong.find_by(
  #     playlist_id: params[:list_id],
  #     song_id: params[:id]
  #   )
  # end
end
