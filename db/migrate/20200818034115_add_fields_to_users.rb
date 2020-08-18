class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :display_name, :string
    add_column :users, :gender, :string
    add_column :users, :age, :integer
  end
end
