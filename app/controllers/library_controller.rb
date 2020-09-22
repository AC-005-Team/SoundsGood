class LibraryController < ApplicationController
  before_action :authenticate_user!, only: [:likes]

  def library;end

  def likes
    @like_songs = current_user.like_songs
  end

  def sets
  end
  
  def albums
  end

  def stations
  end

  def following
    @followees = current_user.followees
  end

  def history
  end

end
