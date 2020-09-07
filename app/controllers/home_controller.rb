class HomeController < ApplicationController

  def index
    @songs = Song.all
  end
  
end
