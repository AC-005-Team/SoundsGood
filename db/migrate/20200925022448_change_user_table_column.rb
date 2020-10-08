class ChangeUserTableColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :room_id
    add_column :rooms, :user_id, :integer
  end
end
