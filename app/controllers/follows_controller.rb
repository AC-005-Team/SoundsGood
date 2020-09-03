class FollowsController < ApplicationController
  def index
    @users = current_user.followed_users
  end

end