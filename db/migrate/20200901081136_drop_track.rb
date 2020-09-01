class DropTrack < ActiveRecord::Migration[6.0]
  def change
    drop_table :tracks
  end
end
