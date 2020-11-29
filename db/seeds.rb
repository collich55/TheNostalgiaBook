# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Friendship.destroy_all
User.create!({ email: "random@gmail.com", password: "random", full_name: "Christopher Johnson", birth_date: "12/11/1996", gender: "male" });
User.create!({ email: "random2@gmail.com", password: "random", full_name: "Randy Davis", birth_date: "11/14/1990", gender: "male" });
User.create!({ email: "random3@gmail.com", password: "random", full_name: "Erica Harper", birth_date: "10/20/1994", gender: "female" });
User.create!({ email: "random4@gmail.com", password: "random", full_name: "Stacy Johnson", birth_date: "10/11/1999", gender: "female" });
User.create!({ email: "random5@gmail.com", password: "random", full_name: "Eric Andre", birth_date: "10/20/1991", gender: "male" });
User.create!({ email: "random6@gmail.com", password: "random", full_name: "Jessica Thomas", birth_date: "10/20/1995", gender: "female" });
User.create!({ email: "random7@gmail.com", password: "random", full_name: "Rick Sanchez", birth_date: "11/29/1955", gender: "male" });
User.create!({ email: "random8@gmail.com", password: "random", full_name: "Marisa Mali", birth_date: "12/20/1997", gender: "female" });
User.create!({ email: "random9@gmail.com", password: "random", full_name: "James Dean", birth_date: "10/20/1998", gender: "male" });
Post.create!({ body: "This is a post!!!", author_id: User.find_by(email: "random@gmail.com").id})
Friendship.create!({requester_id: User.find_by(email: "random@gmail.com").id, requestee_id: User.find_by(email: "random2@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random@gmail.com").id, requestee_id: User.find_by(email: "random3@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random@gmail.com").id, requestee_id: User.find_by(email: "random4@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random@gmail.com").id, requestee_id: User.find_by(email: "random6@gmail.com").id, accepted: false})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random3@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random5@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random6@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random7@gmail.com").id, accepted: false})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random8@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random2@gmail.com").id, requestee_id: User.find_by(email: "random9@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random3@gmail.com").id, requestee_id: User.find_by(email: "random4@gmail.com").id, accepted: true})
Friendship.create!({requester_id: User.find_by(email: "random3@gmail.com").id, requestee_id: User.find_by(email: "random5@gmail.com").id, accepted: false})
