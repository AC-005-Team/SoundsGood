class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Song.find(params[:song_id]).comments
  end
end
