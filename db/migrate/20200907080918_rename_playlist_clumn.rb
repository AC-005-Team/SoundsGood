class RenamePlaylistClumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :playlists_songs, :play_list_id ,:playlist_id
  end
end
