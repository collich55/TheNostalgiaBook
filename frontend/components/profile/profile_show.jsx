
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

    


    render() {

       let pending = this.requestPending();
       let proPic = this.proPicMaybe();
       let posts = this.props.fetchPosts();
    //    const {full_name, birth_date, gender, email} = this.props.users[this.props.userId]
        
         const {full_name, last_name, gender, birth_date,  } = this.props.users[this.props.userId]
         let b = this.checkIfFriend();

    //    if (!full_name) {
    //        full_name = "temp"
    //    }
        return(
        <div id={"pro-page"}>

                {proPic}

            <div id={"name"}   >
                <h1>{full_name + " " + last_name}</h1>
                {b}
            </div>
           
            {/* <h2>{birth_date}</h2>
            <h2>{gender}</h2>
            <h2>{email}</h2> */}

            <br/>
            <br/>
            <br/>

            <div id={"about"}>
                <h1>About:</h1>
                <br/>
                <h2>Birthday: {birth_date}</h2>
                <h2>Gender: {gender}</h2>
                <h2>School: {this.props.users[this.props.userId].school}</h2>
                <h2>Location: {this.props.users[this.props.userId].location}</h2>
                
            


            </div>
            <br/>
            <div id={"friend-box-all"}  >
                <h1>Friends:</h1>

                    <FriendshipIndexContainer userId={this.props.userId} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
                    <PostIndexContainer userId={this.props.userId} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
            </div>
            {/* <div id={"request-box"}>

                <ul>
                    {
                        pending.map(
                            request => <p></p>
                        )
                    }
                </ul>


            </div> */}
            
        
        </div>
        )
    }
}


export default ProfileShow;