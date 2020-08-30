class UsersController < ApplicationController

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
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :display_name, :avatar, :email, :header)
  end
end