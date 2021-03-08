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
   
        return Object.values(this.props.friendships).filter(request => (request.accepted === true) && (this.props.userId == request.requestee_id || this.props.userId == request.requester_id))
    }

    requestPending() {
   
        return Object.values(this.props.friendships).filter(request => (request.accepted === false) && (this.props.userId == request.requestee_id))
    }

    pendingShow() {
        const pending = this.requestPending();
        if (this.props.currentUser.id == this.props.userId){
            return(

                <ul id={"pending-box"}>
                    <h1>Friend Requests</h1>
                    {
                        pending.map(
                            request => <PendingFriendshipItemContainer userId={this.props.userId} requester_id={request.requester_id} requestee_id={request.requestee_id} deleteRequest={requestId => dispatch(deleteRequest(requestId))} />
                        )
                    }
                </ul>

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
                            request => <FriendshipItemContainer userId={this.props.userId} requester_id={request.requester_id} requestee_id={request.requestee_id} />
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