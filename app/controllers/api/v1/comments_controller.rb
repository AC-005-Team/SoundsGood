class Api::V1::CommentsController < ApplicationController
  def index
    @song = Song.find(params[:song_id])
    @comments = @song.comments
    @song_and_comments = {
      song: @song,
      comments: @comments
    }
  end
end