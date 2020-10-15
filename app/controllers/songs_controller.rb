class SongsController < ApplicationController

	before_action :authenticate_user!, except: [:show]
	before_action :find_song, only: [:show, :destroy, :like, :repost, :add_to_playlist, :share, :add_played_times]

	def index
		@songs = current_user.songs.includes(:tags)
		@playlists = current_user.playlists
		render json: @songs.to_json(include: [:playlists]), status: 200
	end

	def upload
		render layout: "spa"
	end

	def new
		@song = Song.new
		@tags = Tag.all.map(&:name)||[]
	end

	def create
		@song =  current_user.songs.new(song_params)

		if @song.save
			# redirect_to user_songs_path
			render json: @song, status: 200
		else
			# render :new
			render json: @song, status: 400
		end
	end

	def show
		@comment = @song.comments.new
		@comments = @song.comments.includes(:user, replies:[:user]).where(reply_id: nil).order(id: :desc)
		@related_song = Song.all.limit(3)
		@playlist = Playlist.new
		begin
			@playlists = current_user.playlists
		rescue
			p 'not logged in'
		end
	end

	def destroy
		@song.destroy
		redirect_to user_path(current_user.id)
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

	def like
		current_user.toggle_like_song(@song)

		respond_to do |format|
			format.html {redirect_to @song}
			format.json {render json: {status: @song.favorited_by?(current_user)}}
		end
	end

	def repost
		current_user.toggle_repost_song(@song)
		respond_to do |format|
			format.html {redirect_to @song}
			format.json {render json: {status: @song.reposted_by?(current_user)}}
		end
	end

	def add_played_times
		x = @song.played_times + 1
		@song.update(played_times: x)
  end

	def share;end

	private

	def song_params
		params.require(:song).permit(:name, :intro, :track, :image, tag_items: [])
	end

	def find_song
		@song = Song.find(params[:id])
	end
end
