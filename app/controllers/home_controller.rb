class HomeController < ApplicationController

  def index
    @songs = Song.all
  end
  
  def discover
    @songs = Song.all
  end

  def stream;end
end
