
# The Nostalgia Book

The Nostalgia Book is a Facebook clone hosted on Heroku. The Nostalgia Book currently supports user authentication and unique user profile pages; as well as posting, liking, and commenting features for interactions between users.

## Technologies used:
* Front end
   * Javascript
   * jQuery
   * React-Redux
   * HTML/CSS
* Back end
   * Ruby on Rails
   * PostgreSQL
   * JBuilder

The Nostalgia Book supports user authenticated login, signup, sign out features. 

<img width="1440" alt="Screen Shot 2021-03-15 at 12 04 01 PM" src="https://user-images.githubusercontent.com/62472030/111193796-f1983100-8590-11eb-8ada-41bbc5721622.png">
<img width="1440" alt="Screen Shot 2021-03-15 at 12 04 47 PM" src="https://user-images.githubusercontent.com/62472030/111193811-f5c44e80-8590-11eb-9d79-d42c876ddfa5.png">

The Nostalgia Book boasts a newsfeed feature with posts, likes, and comment functionatility.

<img width="1440" alt="Screen Shot 2021-03-15 at 12 05 10 PM" src="https://user-images.githubusercontent.com/62472030/111193827-f9f06c00-8590-11eb-96f4-01693cf101d6.png">

![post-like-comment-15-secs](https://user-images.githubusercontent.com/62472030/111193923-14c2e080-8591-11eb-8c88-3ba4f1b04cef.gif)

The Nostalgia Book supports user profiles which displays user specific information, including pictures provided via web link. This information can also be updated while signed in and on your personal profile page.

<img width="1439" alt="Screen Shot 2021-03-15 at 12 05 26 PM" src="https://user-images.githubusercontent.com/62472030/111196701-f6121900-8593-11eb-9fc6-e8a09d0f82e6.png">

![Update Profile](https://user-images.githubusercontent.com/62472030/111207761-64f56f00-85a0-11eb-80cc-c86d6a8749ad.gif)

The Nostalgia Book also has a robust friending system. Sending sending, receiving, accepting, and unfriending are all supported, allowing for the creation of large networks of connections.

![Accepting Friend Request](https://user-images.githubusercontent.com/62472030/111208779-93c01500-85a1-11eb-9847-87e30a5d036b.gif)

The Nostalgia Book plans on adding other features, such as liking comments and mobile support, to better facilitate a fully immersive and modern social media experience.
 
 
## Friendship Item Code

The Friendship item first checks if the profile_photo_link is either null or a blank string. If this is the case, the default profile picture will be used instead of a custom picture. The link to the friend profile page references the ID of the the friend to be used in the web address to reference the other user's profile page.

```Javascript

render() {
        
        let friend = this.nameDisplay();
        let photo;
        if (!(friend.profile_photo_link) || friend.profile_photo_link === "") {
            photo = "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";
        } else {
            photo = friend.profile_photo_link;
        }

        return (
            <div id={"friend-item-box"}>
                

                <Link key={friend.id} replace to={`${friend.id}`} >
                    <div className="friendship-pro-pic-and-name">
                        <img className="friendship-pro-pic" src={friend.profile_photo_link} alt="Pro Pic" />
                        {friend.full_name + " " + friend.last_name}
                    </div>
                </Link>
                    
                
            </div>
        )
    }
    ```
 


