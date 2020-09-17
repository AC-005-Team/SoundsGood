class CreateReposts < ActiveRecord::Migration[6.0]
  def change
    create_table :reposts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :repostable, polymorphic: true
      t.timestamps
    end
  end
end
