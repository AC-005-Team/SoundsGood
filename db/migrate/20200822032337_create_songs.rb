class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.text :intro
      t.text :track_data, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
