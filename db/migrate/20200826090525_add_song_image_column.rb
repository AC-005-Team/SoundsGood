class AddSongImageColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :image_data, :text
  end
end
