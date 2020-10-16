class Api::V1::UsersController < ApplicationController


  def index
  end

  def unfollow
    @unfollow_users = (User.all - current_user.followees - [current_user]).shuffle
  end

end
