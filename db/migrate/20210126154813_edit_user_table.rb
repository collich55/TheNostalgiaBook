class EditUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_name, :string
    add_index :users, :last_name
    add_column :users, :profile_photo_link, :string
    add_column :users, :banner_photo_link, :string
    add_column :users, :high_school, :string
    
  end
end
