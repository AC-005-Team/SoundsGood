class LibraryController < ApplicationController
  before_action :authenticate_user!, only: [:likes]

  def library
    @songs = Song.all.includes(:tags)
  end

  def likes
    @like_songs = current_user.like_songs
    @songs = Song.all.includes(:tags)
  end

  def sets
    @songs = Song.all.includes(:tags)
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
