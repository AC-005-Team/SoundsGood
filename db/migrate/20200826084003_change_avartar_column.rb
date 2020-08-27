class ChangeAvartarColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :avatar_data, :text
  end
end
