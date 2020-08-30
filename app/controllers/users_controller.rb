class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:follow]

  def show
    @user = User.find(params[:id])
  end

  def follow
    @user = User.find(params[:id])
    current_user.toggle_follow(@user)
  end

end