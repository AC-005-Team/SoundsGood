class HomeController < ApplicationController
  before_action :authenticate_user!, except: [:discover]
  before_action :find_song
  
  def index;end
  
  def discover;end
  
  def stream;end
  
  private
  
  def find_song
    @songs = Song.all.includes(:tags)
  end

end
