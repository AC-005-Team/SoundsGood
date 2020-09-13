class ApplicationController < ActionController::Base

  private
  def after_sign_in_path_for(resource)
    discover_path
  end
  
  def after_sign_up_path_for(resource)
    discover_path
  end
end
