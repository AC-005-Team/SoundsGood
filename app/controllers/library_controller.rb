class LibraryController < ApplicationController
  before_action :authenticate_user!, only: [:likes]

  def library;end

  def likes
    @like_songs = current_user.like_songs
  end
  
end
