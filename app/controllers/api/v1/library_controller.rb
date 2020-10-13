class Api::V1::LibraryController < ApplicationController

  def library
    @songs = Song.all.includes(:tags)
  end

  def likes
    @like_songs = current_user.like_songs
  end

  def sets
    @playlists = current_user.playlists
  end

  def albums
  end

  def stations
  end

  def following
    @followees = current_user.followees
  end

  def history
    @songs = Song.all.includes(:tags)
  end

end
