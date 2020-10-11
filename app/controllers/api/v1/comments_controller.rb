class Api::V1::CommentsController < ApplicationController
  def index
    @song = Song.find(params[:song_id])
    @comments = @song.comments.where(reply_id: nil)
    @song_and_comments = {
      song: @song,
      comments: @comments
    }
  end
end