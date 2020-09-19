class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:follow]
  before_action :find_user, only: [:show, :follow]

  def show;end

  def follow
    current_user.toggle_follow(@user)
  end

  def edit
    @user = current_user
  end

  def update
    if current_user.update(user_params)
      redirect_to user_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :display_name, :avatar, :email, :header)
  end

  def find_user
    @user = User.find(params[:id])
  end
  
end