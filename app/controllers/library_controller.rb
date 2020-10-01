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
    @playlists = current_user.playlists
  end

  def albums
  end

  def stations
  end

  def following
  end

  def history
  end
  
  
end
