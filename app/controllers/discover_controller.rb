class DiscoverController < ApplicationController

  def index
    @songs = Song.all
  end
  
end
