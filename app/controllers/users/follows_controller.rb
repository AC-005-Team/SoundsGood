class Users::FollowsController < ApplicationController
  def follow
    @user = User.find(params[:user_id])
    current_user.toggle_follow(@user)
  end

  

  
end