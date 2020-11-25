# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
User.create!({ email: "random@gmail.com", password: "random", full_name: "Christopher Johnson", birth_date: "12/3/45", gender: "male" });
User.create!({ email: "random2@gmail.com", password: "random2", full_name: "Christopher Johnson 2", birth_date: "12/3/45", gender: "male" });
Post.create!({ body: "This is a post!!!", author_id: User.find_by(email: "random@gmail.com").id})
Friendship.create!({requester_id: User.find_by(email: "random@gmail.com").id, requestee_id: User.find_by(email: "random2@gmail.com").id, accepted: false})