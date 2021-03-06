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
Like.destroy_all
Comment.destroy_all

User.create!({ email: "random@gmail.com", password: "random", full_name: "Christopher", last_name: "Johnson", birth_date: "12/11/1996", gender: "male", school: "Donnelly College", location: "Kansas City, MO", profile_photo_link: "https://qph.fs.quoracdn.net/main-qimg-158c90908c0663d81e5cdec64de5bc96" });
User.create!({ email: "random2@gmail.com", password: "random", full_name: "Randy", last_name: "Davis", birth_date: "11/14/1990", gender: "male", school: "University of North Carolina at Chapel Hill", location: "Boston, MA", profile_photo_link: "https://miro.medium.com/max/5680/1*auyELWA7GkYHF-h2YoX-Uw.jpeg" });
User.create!({ email: "random3@gmail.com", password: "random", full_name: "Erica", last_name: "Harper", birth_date: "10/20/1994", gender: "female", school: "New York University", location: "New York, NY", profile_photo_link: "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/846105/6cfa8ca4-3696-4212-a054-3db90589852c.jpg" });
User.create!({ email: "random4@gmail.com", password: "random", full_name: "Clarissa", last_name: "Brookdale", birth_date: "10/11/1999", gender: "female", profile_photo_link: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/ClarissaExplainsItAll_944600_CLARISSAEXPLAINSITALL._V344740739_SX1080_.jpg", school: "Thomas Tupper Junior High School", location: "Seattle, WA" });
User.create!({ email: "random5@gmail.com", password: "random", full_name: "Eric", last_name: "Andre", birth_date: "10/20/1991", gender: "male", school: "Berklee College of Music", location: "Boca Raton, FL", profile_photo_link: "https://globalnews.ca/wp-content/uploads/2019/04/gettyimages-631597174.jpg?quality=85&strip=all&w=1200" });
User.create!({ email: "random6@gmail.com", password: "random", full_name: "Jessica", last_name: "Thomas", birth_date: "10/20/1995", gender: "female", profile_photo_link: "https://media.vanityfair.com/photos/5f7736a15b33964912365df5/master/pass/jessica.jpg", school: "Columbia University", location: "New York, NY" });
User.create!({ email: "random7@gmail.com", password: "random", full_name: "Rick", last_name: "Sanchez", birth_date: "11/29/1955", gender: "male", profile_photo_link: "https://pbs.twimg.com/profile_images/936048451430760448/nvBks8aj_400x400.jpg", school: "Ohio State University", location: "Columbus, OH" });
User.create!({ email: "random8@gmail.com", password: "random", full_name: "Marisa", last_name: "Mali", birth_date: "12/20/1997", gender: "female", profile_photo_link: "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", location: "Los Angeles, CA", school: "Sierra Nevada Prepatory" });
User.create!({ email: "random9@gmail.com", password: "random", full_name: "James", last_name: "Dean", birth_date: "10/20/1998", gender: "male", profile_photo_link: "https://images.findagrave.com/photos250/photos/2005/39/267_110799478308.jpg", school: "Princeton University", location: "Honolulu, HI" });

Post.create!({ body: "I can't believe it's getting warm again! I have a good feeling about this summer.", author_id: User.find_by(email: "random@gmail.com").id})
Post.create!({ body: "❤️❤️", author_id: User.find_by(email: "random5@gmail.com").id, other_user_id: User.find_by(email: "random9@gmail.com").id})
Post.create!({ body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?", author_id: User.find_by(email: "random4@gmail.com").id})
Post.create!({ body: "Randy! We've GOT to hit up the Rockaways again. How about this weekend we get on the A train and take it all the way down 👍", author_id: User.find_by(email: "random@gmail.com").id, other_user_id: User.find_by(email: "random2@gmail.com").id})

Like.create!({ liker_id: User.find_by(email: "random2@gmail.com").id, post_id: Post.find_by(body: "I can't believe it's getting warm again! I have a good feeling about this summer.").id})
Like.create!({ liker_id: User.find_by(email: "random3@gmail.com").id, post_id: Post.find_by(body: "I can't believe it's getting warm again! I have a good feeling about this summer.").id})
Like.create!({ liker_id: User.find_by(email: "random4@gmail.com").id, post_id: Post.find_by(body: "I can't believe it's getting warm again! I have a good feeling about this summer.").id})
Like.create!({ liker_id: User.find_by(email: "random6@gmail.com").id, post_id: Post.find_by(body: "I can't believe it's getting warm again! I have a good feeling about this summer.").id})
Like.create!({ liker_id: User.find_by(email: "random9@gmail.com").id, post_id: Post.find_by(body: "I can't believe it's getting warm again! I have a good feeling about this summer.").id})

Like.create!({ liker_id: User.find_by(email: "random2@gmail.com").id, post_id: Post.find_by(body: "Randy! We've GOT to hit up the Rockaways again. How about this weekend we get on the A train and take it all the way down 👍").id})

Comment.create!({ body: "Yesss! How about this time we change it up and take the ferry at Pier 11. Heard it's got great views ⛴️", commenter_id: User.find_by(email: "random2@gmail.com").id, post_id: Post.find_by(body: "Randy! We've GOT to hit up the Rockaways again. How about this weekend we get on the A train and take it all the way down 👍").id})
Comment.create!({ body: "It's a plan! 💯💯", commenter_id: User.find_by(email: "random@gmail.com").id, post_id: Post.find_by(body: "Randy! We've GOT to hit up the Rockaways again. How about this weekend we get on the A train and take it all the way down 👍").id})





Comment.create!({ body: "I heard Cafe Grumpy is nice, despite the less than friendly name 🤣", commenter_id: User.find_by(email: "random@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Just looked it up and it's closed...are you trying to be unhelpful??", commenter_id: User.find_by(email: "random4@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Ohh haha my bad...", commenter_id: User.find_by(email: "random@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Yup.", commenter_id: User.find_by(email: "random4@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Hey Clarissa, just went to the Culture Espresso last week. Totally recommend it! The iced americano was perfection 👌.", commenter_id: User.find_by(email: "random6@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Thanks Jess that's so helpful! Unlike some *cough* other people *cough* *cough*", commenter_id: User.find_by(email: "random4@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "Hey!! 😂", commenter_id: User.find_by(email: "random@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})
Comment.create!({ body: "hahhah jk jk ❤️❤️", commenter_id: User.find_by(email: "random4@gmail.com").id, post_id: Post.find_by(body: "Ugh, my FAVORITE coffee place is closing for the foreseeable future 🙄. Does anybody have any recs for a place near Bryant park?").id})

Comment.create!({ body: "Excuse me?", commenter_id: User.find_by(email: "random9@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})
Comment.create!({ body: "Oh wrong person sorry.", commenter_id: User.find_by(email: "random5@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})
Comment.create!({ body: "You know you can edit your posts right?", commenter_id: User.find_by(email: "random9@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})
Comment.create!({ body: "Eh, I'm good ;)", commenter_id: User.find_by(email: "random5@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})
Comment.create!({ body: "LOL k.", commenter_id: User.find_by(email: "random9@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})
Comment.create!({ body: "😅", commenter_id: User.find_by(email: "random5@gmail.com").id, post_id: Post.find_by(body: "❤️❤️").id})


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
Friendship.create!({requester_id: User.find_by(email: "random9@gmail.com").id, requestee_id: User.find_by(email: "random@gmail.com").id, accepted: false})
