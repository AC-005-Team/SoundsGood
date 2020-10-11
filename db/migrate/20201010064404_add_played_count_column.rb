class AddPlayedCountColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :played_times, :integer, default: 0
  end
end
