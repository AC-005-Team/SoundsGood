class AddRoomColumnInUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :room_id, :integer
  end
end
