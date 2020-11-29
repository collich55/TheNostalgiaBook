
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'




class ProfileShow extends React.Component {

    constructor(props) {
        super(props)
        this.handleFriendRequest = this.handleFriendRequest.bind(this)
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
        debugger
        this.props.createRequest({ requester_id: this.props.currentUserId, requestee_id: parseInt(this.props.userId), accepted: false})
    }

    handleFriendAcceptace() {

    }

    checkIfFriend() {
        if (this.props.userId == this.props.currentUserId) {
            return null
        }

        let oneOrNonerequest = Object.values(this.props.friendships).filter(request => (((this.props.userId == request.requestee_id) && (this.props.currentUserId == request.requester_id)) || ((this.props.userId == request.requester_id) && (this.props.currentUserId == request.requestee_id))));
        if (oneOrNonerequest.length < 1) {
            return <button  onClick={this.handleFriendRequest} >add friend</button>
        }

        if (oneOrNonerequest[0].accepted == true) {
            return <h2>you are friends</h2>
        } 

        if ((oneOrNonerequest[0].accepted == false) && (oneOrNonerequest[0].requester_id == this.props.currentUserId)) {
            return <h2>request is pending</h2>
        } else {
            return <button onClick={this.handleFriendAcceptace}  >accept request</button>
        }

        
    }

    


    render() {
       debugger
    //    const {full_name, birth_date, gender, email} = this.props.users[this.props.userId]
        
         const {full_name, gender, birth_date,  } = this.props.users[this.props.userId]
         let b = this.checkIfFriend();

    //    if (!full_name) {
    //        full_name = "temp"
    //    }
        return(
        <div id={"pro-page"}>
            <div id={"name"}   >
                <h1>{full_name}</h1>
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


            </div>
            <br/>
            <div id={"friend-box"}  >
                <h1>Friends:</h1>

                <FriendshipIndexContainer userId={this.props.userId} />
            </div>
            
        
        </div>
        )
    }
}


export default ProfileShow;