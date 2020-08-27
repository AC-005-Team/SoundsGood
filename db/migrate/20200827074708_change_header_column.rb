class ChangeHeaderColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :header_img, :header_data
    change_column :users, :header_data, :text
  end
end
