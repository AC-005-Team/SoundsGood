class CreatePlayListSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :play_list_songs do |t|
      t.references :play_list, null: false, foreign_key: true
      t.references :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
