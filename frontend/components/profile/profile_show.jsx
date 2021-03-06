
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'
import PostIndexContainer from '../post/post_index_container'




class ProfileShow extends React.Component {

    constructor(props) {
        super(props)
        this.handleFriendRequest = this.handleFriendRequest.bind(this)
        this.handleFriendAcceptance = this.handleFriendAcceptance.bind(this)
        this.handleUnfriend = this.handleUnfriend.bind(this)
        this.state = {
            flag: false
        }
    }

    componentDidMount() {
       
        this.props.showUser(this.props.match.params.userId);

        this.props.fetchUsers();
        this.props.fetchRequests();
        this.props.fetchPosts();
        this.props.fetchComments();
        this.props.fetchLikes();
        
        
    }

    actuallyFriended() {
        return Object.values(this.props.friendships).reverse().filter(request => request.accepted === true)
    }


    // render() {
    //     const friended = this.actuallyFriended();
    //     return (
    //         <div id={"friend-box"}>
    //             <ul>
    //                 {
    //                     friended.map(
    //                         request => <FriendshipItemContainer requestee_id={request.requestee_id} />
    //                     )
    //                 }
    //             </ul>
    //         </div>
    //     )
    // }

    handleFriendRequest() {
 
        this.props.createRequest({ requester_id: this.props.currentUserId, requestee_id: parseInt(this.props.userId), accepted: false})
    }

    handleFriendAcceptance(requestId) {
        this.props.deleteRequest(requestId)
        this.props.createRequest({ requester_id: this.props.currentUserId, requestee_id: parseInt(this.props.userId), accepted: true })
    }

    handleUnfriend(requestId) {
        this.props.deleteRequest(requestId)
    }

    

    

    checkIfFriend() {


        const { full_name, last_name } = this.props.users[this.props.userId]

        if (this.props.userId == this.props.currentUserId) {
            return <div key="name" id={"name"}   >
                <span key="times" className="name-and-friend-status">
                    <h1>{full_name + " " + last_name}</h1>
                </span>
            </div>
        }

        let oneOrNonerequest = Object.values(this.props.friendships).filter(request => (((this.props.userId == request.requestee_id) && (this.props.currentUserId == request.requester_id)) || ((this.props.userId == request.requester_id) && (this.props.currentUserId == request.requestee_id))));
        if (oneOrNonerequest.length < 1) {
            return <div key="name" id={"name"}   >
                <span key="times" className="name-and-friend-status">
                    <h1>{full_name + " " + last_name}</h1>
                    <span>
                        <i id="you-are-friends-icon" class="fas fa-user-times"></i>
                    </span>
                </span>
                <span id={"unfriend"}>
                    <button className="add-friend-button" onClick={this.handleFriendRequest} >Add Friend</button>
                </span>
            </div>
        }

        if (oneOrNonerequest[oneOrNonerequest.length - 1].accepted == true) {
            return (
                <div key="name" id={"name"}   >
                    <span key="check" className="name-and-friend-status">
                        <h1>{full_name + " " + last_name}</h1>
                        <span>
                            <i id="you-are-friends-icon" class="fas fa-user-check"></i>
                        </span>
                    </span>
                    <span id={"unfriend"}>
                        <button className="unfriend-button" onClick={() => this.handleUnfriend(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >Unfriend</button>
                    </span>
                </div>
            )
        }

        if ((oneOrNonerequest[oneOrNonerequest.length - 1].accepted == false) && (oneOrNonerequest[oneOrNonerequest.length - 1].requester_id == this.props.currentUserId)) {
            return <div key="name" id={"name"}   >
                <span key="clock" className="name-and-friend-status">
                    <h1>{full_name + " " + last_name}</h1>
                    <span>
                        <i id="you-are-friends-icon" class="fas fa-user-clock"></i>
                    </span>
                </span>
                <span id={"unfriend"}>
                    <button className="unrequest-button" onClick={() => this.handleUnfriend(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >Cancel Request</button>
                </span>
            </div>
        } else {
            return <div key="name" id={"name"}   >
                <span key="clock" className="name-and-friend-status">
                    <h1>{full_name + " " + last_name}</h1>
                    <span>
                        <i id="you-are-friends-icon" class="fas fa-user-clock"></i>
                    </span>
                </span>
                <span className="accept-or-deny-request" >
                    <button className="accept-request-button" onClick={() => this.handleFriendAcceptance(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >Confirm</button>
                    <button className="deny-request-button" onClick={() => this.handleUnfriend(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >Deny</button>
                </span>
            </div>

        }

    }

    requestPending() {
  
        return Object.values(this.props.friendships).reverse().filter(request => (request.accepted === false) && (this.props.userId == request.requestee_id || this.props.userId == request.requester_id))
    }

    nameDisplay() {
        if (this.props.requestee_id == this.props.userId) {
            return this.props.users[this.props.requester_id]
        } else {
            return this.props.users[this.props.requestee_id]
        }
    }

    proPicMaybe() {
        if (!this.props.users[this.props.userId].profile_photo_link || this.props.users[this.props.userId].profile_photo_link === "") {
            return <img className="pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
        } else {
            return <img className="pro-pic" src={this.props.users[this.props.userId].profile_photo_link} alt="Pro Pic" />
        }
        
    }

    proPicMaybeForPost() {
        if (!this.props.currentUser.profile_photo_link || this.props.currentUser.profile_photo_link === "") {
            return <img className="post-pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
        } else {
            return <img className="post-pro-pic" src={this.props.currentUser.profile_photo_link} alt="Pro Pic" />
        }
    }

    // proPicMaybeForPostOnProfile() {
    //     if (!this.props.currentUser.profile_photo_link || this.props.currentUser.profile_photo_link === "") {
    //         return <img className="post-pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
    //     } else {
    //         return <img className="post-pro-pic" src={this.props.profileUser.profile_photo_link} alt="Pro Pic" />
    //     }
    // }


    newPost() {

        

        if (this.props.userId == this.props.currentUserId) {
            return (
                <div className="new-post-profile">

                    {this.proPicMaybeForPost()}

                    <button className="new-post-button-profile" onClick={() => this.props.newPost('new-post')}>
                        What's on your mind, {this.props.currentUser.full_name}?
                    </button>

                </div>
            )
        } else {
            return (
                <div className="new-post-profile">

                    {this.proPicMaybeForPost()}

                    <button className="new-post-button-profile" onClick={() =>this.props.newPost(["new-post-for-profile", this.props.profileUser])}>
                        Write something to {this.props.profileUser.full_name}...
                        </button>

                </div>
            )
        }

    }


    handleUpdateButton() {


        if (this.props.userId == this.props.currentUserId) {
            return <div className="update-button-spacing" >
                <button className="update-button" onClick={() => this.props.openModal('update')}>
                    Edit Details
                </button>
            </div>
        } else {
            return null
        }

    }

    


    render() {


        if (Object.values(this.props.users).length < 3) {
            return null
        }

        let proPic = this.proPicMaybe();
        let newPost = this.newPost();
        let handleUpdateButton = this.handleUpdateButton();
        
        
        const {gender, birth_date,  } = this.props.users[this.props.userId]
        
        let full = this.checkIfFriend();

        
            return (

                <div id={"pro-page"}>
                    <div className="profile-header">
                        {proPic}
                        {full}
                    </div>

                    <div className="profile-main" >

                        <div className="left-profile" >

                            <div id={"about"}>
                                <h1>Intro</h1>
                                <br />
                                <h2>Studied at {this.props.users[this.props.userId].school}</h2>
                                <h2>Lives in {this.props.users[this.props.userId].location}</h2>
                                <h2>Gender is {gender}</h2>
                                <h2>Birthday is {birth_date}</h2>
                                {handleUpdateButton}
                            </div>

                            <br />

                            <div id={"about"}  >
                                <h1>Friends</h1>
                                <FriendshipIndexContainer userId={this.props.userId} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
                            </div>

                        </div>

                        <div className="right-profile" >

                            {newPost}

                            <span className="post-index-label-profile" >
                                <h1>Posts</h1>
                            </span>


                            <PostIndexContainer situation="profile-show" profileUserId={this.props.userId} users={this.props.users} />


                        </div>

                    </div>



                </div>
            )

        

        
    }
}


export default ProfileShow;