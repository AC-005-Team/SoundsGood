class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  scope :name_search, -> (column, content){where("#{column} ILIKE ?", "%#{content}%").limit(20)}
end
