class RenameTable < ActiveRecord::Migration[6.0]
  def change
    rename_table :play_lists, :playlists
  end
end
