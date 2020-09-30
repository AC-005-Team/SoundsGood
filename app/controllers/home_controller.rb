class HomeController < ApplicationController
  before_action :find_song
  
  def index
    byebug
  end
  
  def discover
  end
  
  def stream;end
  
  private
  
  def find_song
    @songs = Song.all.includes(:tags)
  end
end
