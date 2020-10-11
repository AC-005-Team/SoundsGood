class AddSongCounterInUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :songs_count, :integer, default: 0
  end
end
