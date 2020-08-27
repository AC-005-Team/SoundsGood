class RenameAtatarColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :avatar_img, :avatar_data
  end
end
