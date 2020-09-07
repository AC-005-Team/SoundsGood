class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :song, null: false, foreign_key: true
      t.text :content, null: false
      t.integer :reply_id, default: 0 
      t.string :timepoint

      t.timestamps
    end
  end
end
