class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  def self.name_search(column, content)
    self.where("#{column} LIKE ?", "%#{content}%").limit(20)
  end

end
