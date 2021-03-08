
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'
import PostIndexContainer from '../post/post_index_container'




class ProfileShow extends React.Component {

    constructor(props) {
        super(props)
        this.handleFriendRequest = this.handleFriendRequest.bind(this)
        this.handleFriendAcceptance = this.handleFriendAcceptance.bind(this)
        this.handleUnfriend = this.handleUnfriend.bind(this)
    }

    componentDidMount() {
       
        this.props.showUser(this.props.match.params.userId);
        this.props.fetchUsers();
        this.props.fetchRequests();
        
    }

    actuallyFriended() {
        return Object.values(this.props.friendships).filter(request => request.accepted === true)
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
        if (this.props.userId == this.props.currentUserId) {
            return null
        }

        let oneOrNonerequest = Object.values(this.props.friendships).filter(request => (((this.props.userId == request.requestee_id) && (this.props.currentUserId == request.requester_id)) || ((this.props.userId == request.requester_id) && (this.props.currentUserId == request.requestee_id))));
        if (oneOrNonerequest.length < 1) {
            return <button  onClick={this.handleFriendRequest} >add friend</button>
        }

        if (oneOrNonerequest[oneOrNonerequest.length - 1].accepted == true) {
            return ( 
                <div id={"unfriend"}>
                    <h2>you are friends</h2>
                    <button onClick={() => this.handleUnfriend(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >Unfriend</button> 
                </div>
            )
        } 

        if ((oneOrNonerequest[oneOrNonerequest.length - 1].accepted == false) && (oneOrNonerequest[oneOrNonerequest.length - 1].requester_id == this.props.currentUserId)) {
            return <h2>request is pending</h2>
        } else {
            return <button onClick={() => this.handleFriendAcceptance(oneOrNonerequest[oneOrNonerequest.length - 1].id)}  >accept request</button>
        }
        
    }

    requestPending() {
  
        return Object.values(this.props.friendships).filter(request => (request.accepted === false) && (this.props.userId == request.requestee_id || this.props.userId == request.requester_id))
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

    


    render() {

        let proPic = this.proPicMaybe();
        
        const {full_name, last_name, gender, birth_date,  } = this.props.users[this.props.userId]
        let b = this.checkIfFriend();

        return(

        <div id={"pro-page"}>
            <div className="profile-header">
                {proPic}
                <div id={"name"}   >
                    <h1>{full_name + " " + last_name}</h1>
                    {b}
                </div>
            </div>

            <div className="profile-main" >

                <div className="left-profile" >

                    <div id={"about"}>
                        <h1>Intro</h1>
                        <br/>
                        <h2>Studied at {this.props.users[this.props.userId].school}</h2>
                        <h2>Gender is {gender}</h2>
                        <h2>Lives in {this.props.users[this.props.userId].location}</h2>
                        <h2>Birthday is {birth_date}</h2>
                        <div className="update-button-spacing" >
                            {this.props.updateForm}
                        </div>
                    </div>

                    <br/>

                    <div id={"about"}  >
                        <h1>Friends</h1>
                        <FriendshipIndexContainer userId={this.props.userId} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
                    </div>

                </div>

                <div className="right-profile" >

                    <div className="new-post-profile">

                        {this.proPicMaybeForPost()}

                        <button className="new-post-button-profile" onClick={this.props.newPost}>
                            What's on your mind, {this.props.currentUser.full_name}?
                        </button>

                    </div>

                    <span className="post-index-label-profile" >
                        <h1>Posts</h1>
                    </span>


                    <PostIndexContainer users={this.props.users} />

                    
                </div>

            </div>

            

        </div>
        )
    }
}


export default ProfileShow;