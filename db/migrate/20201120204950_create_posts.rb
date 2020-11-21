class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|


      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :other_user_id



      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :other_user_id
  end
end


# column name	data type	details
# id	integer	not null, primary key
# body	text	not null
# author_id	integer	not null, indexed, foreign key
# other_user_id	integer	allow null, indexed, foreign key
# created_at	datetime	not_null
# updated_at	datetime	not_null
# author_id references users
# other_user_id references users
# index on author_id
# index on other_user_id