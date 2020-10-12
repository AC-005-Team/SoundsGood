class AddResetCounters < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :reposts_count, :integer, default: 0
    add_column :songs, :comments_count, :integer, default: 0
  end
end
