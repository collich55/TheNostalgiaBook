import React from 'react';
import FriendshipItemContainer from './friendship_item_container';
import PendingFriendshipItemContainer from './pending_friendship_item_container';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';




class FriendshipIndex extends React.Component {

    

    componentDidMount() {
       
        this.props.fetchRequests();
      
    }

    actuallyFriended() {
   
        return Object.values(this.props.friendships).reverse().filter(request => (request.accepted === true) && (this.props.userId == request.requestee_id || this.props.userId == request.requester_id))
    }

    requestPending() {
   
        return Object.values(this.props.friendships).reverse().filter(request => (request.accepted === false) && (this.props.userId == request.requestee_id))
    }

    pendingShow() {
        const pending = this.requestPending();
        if (this.props.currentUser.id == this.props.userId){
            return(
                <div>
                    <h1 id="friend-requests-text">Friend Requests</h1>
                        <ul id={"pending-box"}>
                            {
                                pending.map(
                                    request => <PendingFriendshipItemContainer key={request.id} userId={this.props.userId} requester_id={request.requester_id} requestee_id={request.requestee_id} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
                                )
                            }
                        </ul>
                </div>

            )
        } else {
            return null
        }

            
        
    }




    render() {

        const friended = this.actuallyFriended();
        
        return (
            <div id={"friend-box"}>
                <ul id={"current-friend"}>
                    {
                        friended.map(
                            request => <FriendshipItemContainer key={request.id} userId={this.props.userId} requester_id={request.requester_id} requestee_id={request.requestee_id} />
                        )



                    }
                </ul>   

                <br/>

                
                {this.pendingShow()}
                    
                       



                    
                
            </div>
        )
    }
}

export default FriendshipIndex;

// request => <Link to={`/users/${request.requestee_id}`} >{request.requestee_id}</Link>