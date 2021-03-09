
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'
import PostIndexContainer from '../post/post_index_container'




class HomepageShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       
        this.props.fetchUsers();
        this.props.fetchRequests();
        this.props.fetchPosts();
        this.setState()
        
    }

    actuallyFriended() {
        return Object.values(this.props.friendships).filter(request => request.accepted === true)
    }

    proPicMaybe() {
        if (!this.props.currentUser.profile_photo_link || this.props.currentUser.profile_photo_link === "") {
            return <img className="post-pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
        } else {
            return <img className="post-pro-pic" src={this.props.currentUser.profile_photo_link} alt="Pro Pic" />
        }
    }

    render() {
        return(
        <div id={"homepage"}>
            <div className="timeline">
                <div className="new-post">

                    {this.proPicMaybe()}
                      
                    <button className="new-post-button" onClick={this.props.newPost}>
                        What's on your mind, {this.props.currentUser.full_name}?
                    </button>
 
                </div>
                <div className="newsfeed">
                    <PostIndexContainer users={this.props.users} />
                </div>
            </div>
        </div>
        )
    }
}


export default HomepageShow;