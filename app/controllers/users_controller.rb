class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:follow]
  before_action :find_user, only: [:show, :follow, :followers, :following, :likes, :comments]

  def show;end

  def follow
    current_user.toggle_follow(@user)
    respond_to do |format|
      # format.html {redirect_to @song}
      format.json {render json: {status: @user.followed_by?(current_user)}}
    end
  end

  def edit;end

  def update
    if current_user.update(user_params)
      redirect_to user_path
    else
      render :edit
    end
  end

  def following
    @followees = @user.followees
  end

  def followers
    @followers = @user.followers
  end

  def likes
    @like_songs = @user.like_songs.includes(:tags)
  end

  def comments
    @comments = @user.comments.includes(:songs)
  end
  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :display_name, :avatar, :email, :header)
  end

  def find_user
    @user = User.find(params[:id])
  end

end
