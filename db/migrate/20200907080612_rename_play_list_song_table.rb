class RenamePlayListSongTable < ActiveRecord::Migration[6.0]
  def change
    rename_table :play_list_songs, :playlists_songs
  end
end
