import React from 'react';
import FriendshipItemContainer from './friendship_item_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';




class FriendshipIndex extends React.Component {

    

    componentDidMount() {
        debugger
        this.props.fetchRequests();
        debugger
    }

    actuallyFriended() {
        return Object.values(this.props.friendships).filter(request => request.accepted === true)
    }


    render() {
        const friended = this.actuallyFriended();
        return (
            <div id={"friend-box"}>
                <ul>
                    {
                        friended.map(
                            request => <FriendshipItemContainer requestee_id={request.requestee_id} />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default FriendshipIndex;

// request => <Link to={`/users/${request.requestee_id}`} >{request.requestee_id}</Link>