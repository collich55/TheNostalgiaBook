class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|

      t.string :full_name, null: false
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :location
      t.string :school
      t.string :gender, null: false
      t.string :birth_date, null: false
      t.text :written_bio


      t.timestamps
    end

    add_index :users, :full_name
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true

  end
end
