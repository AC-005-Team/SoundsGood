class ModifyUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :bio, :text
    add_column :users, :profile_url, :string
    add_column :users, :avatar_img, :string
    add_column :users, :header_img, :string
  end
end
