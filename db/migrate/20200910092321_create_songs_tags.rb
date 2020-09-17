class CreateSongsTags < ActiveRecord::Migration[6.0]
  def change
    create_table :songs_tags do |t|
      t.belongs_to :song, null: false, foreign_key: true
      t.belongs_to :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
