class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  scope :name_search, -> (column, content){where("#{column} LIKE ?", "%#{content}%").limit(20)}
end
