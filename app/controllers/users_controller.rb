class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:follow]

  def show
    @user = User.find(params[:id])
  end

  def follow
    @user = User.find(params[:id])
    current_user.toggle_follow(@user)
  end

  def profile
    @user = current_user
  end

  def edit
    @user = current_user
  end

  def update
    if current_user.update(user_params)
      redirect_to user_profile_path
    else
      render :edit
    end
  end

  def play_list
    @play_lists = current_user.play_lists
  end

  def new_play_list
    @play_list = current_user.play_lists.new
  end

  def create_play_list
    @play_list = current_user.play_lists.new(list_params)
    if @play_list.save
      redirect_to play_list_path
    else
      render :new_play_list
    end
  end
end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :display_name, :avatar, :email, :header)
  end

  def list_params
    params.require(:play_list).permit(:name, :intro)
  end

end