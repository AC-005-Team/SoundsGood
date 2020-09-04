class Api::Soundclown::SongsController < ApplicationController
  def index
    @songs = Song.all
  end
end
