class CommentsController < ApplicationController
  before_action :find_song
  before_action :authenticate_user!

  def create
    @comment = @song.comments.new(comment_params)
    if @comment.save
      redirect_to @song
    else
      redirect_to @song
    end
  end

  def destroy
    @comment = @song.comments.find(params[:id])
    @comment.destroy
    redirect_to @song
  end

  private 
  def find_song
    @song = Song.find(params[:song_id])
  end

  def comment_params
    params.require(:comment).permit(:content).merge(user: current_user, reply_id: params[:reply_id])
  end
end
