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
User.create!({ email: "random@gmail.com", password: "random", full_name: "Christopher", last_name: "Johnson", birth_date: "12/11/1996", gender: "male", school: "Donnelly College", location: "Kansas City, MO", profile_photo_link: "https://qph.fs.quoracdn.net/main-qimg-158c90908c0663d81e5cdec64de5bc96" });
User.create!({ email: "random2@gmail.com", password: "random", full_name: "Randy", last_name: "Davis", birth_date: "11/14/1990", gender: "male", school: "University of North Carolina at Chapel Hill", location: "Boston, MA", profile_photo_link: "https://miro.medium.com/max/5680/1*auyELWA7GkYHF-h2YoX-Uw.jpeg" });
User.create!({ email: "random3@gmail.com", password: "random", full_name: "Erica", last_name: "Harper", birth_date: "10/20/1994", gender: "female", school: "New York University", location: "New York, NY", profile_photo_link: "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/846105/6cfa8ca4-3696-4212-a054-3db90589852c.jpg" });
User.create!({ email: "random4@gmail.com", password: "random", full_name: "Clarissa", last_name: "Johnson", birth_date: "10/11/1999", gender: "female", profile_photo_link: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/ClarissaExplainsItAll_944600_CLARISSAEXPLAINSITALL._V344740739_SX1080_.jpg", school: "Thomas Tupper Junior High School", location: "Seattle, WA" });
User.create!({ email: "random5@gmail.com", password: "random", full_name: "Eric", last_name: "Andre", birth_date: "10/20/1991", gender: "male", school: "Berklee College of Music", location: "Boca Raton, FL", profile_photo_link: "https://globalnews.ca/wp-content/uploads/2019/04/gettyimages-631597174.jpg?quality=85&strip=all&w=1200" });
User.create!({ email: "random6@gmail.com", password: "random", full_name: "Jessica", last_name: "Thomas", birth_date: "10/20/1995", gender: "female", profile_photo_link: "https://media.vanityfair.com/photos/5f7736a15b33964912365df5/master/pass/jessica.jpg", school: "Columbia University", location: "New York, NY" });
User.create!({ email: "random7@gmail.com", password: "random", full_name: "Rick", last_name: "Sanchez", birth_date: "11/29/1955", gender: "male", profile_photo_link: "https://pbs.twimg.com/profile_images/936048451430760448/nvBks8aj_400x400.jpg", school: "Ohio State University", location: "Columbus, OH" });
User.create!({ email: "random8@gmail.com", password: "random", full_name: "Marisa", last_name: "Mali", birth_date: "12/20/1997", gender: "female", profile_photo_link: "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg", location: "Los Angeles, CA", school: "Sierra Nevada Prepatory" });
User.create!({ email: "random9@gmail.com", password: "random", full_name: "James", last_name: "Dean", birth_date: "10/20/1998", gender: "male", profile_photo_link: "https://images.findagrave.com/photos250/photos/2005/39/267_110799478308.jpg", school: "Princeton University", location: "Honolulu, HI" });
Post.create!({ body: "This is a post!!!", author_id: User.find_by(email: "random@gmail.com").id})
Post.create!({ body: "This is a post22222!!!", author_id: User.find_by(email: "random@gmail.com").id})
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
