class CreatePlayLists < ActiveRecord::Migration[6.0]
  def change
    create_table :play_lists do |t|
      t.string :name, null: false
      t.text :intro
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
