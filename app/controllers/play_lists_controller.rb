class PlayListsController < ApplicationController
  
  def index
    @play_lists = current_user.play_lists
  end

  def new
    @play_list = current_user.play_lists.new
  end

  def create
    @play_list = current_user.play_lists.new(list_params)
    if @play_list.save
      redirect_to user_play_lists_path
    else
      render :new
    end
  end

  private

  def list_params
    params.require(:play_list).permit(:name, :intro)
  end

end