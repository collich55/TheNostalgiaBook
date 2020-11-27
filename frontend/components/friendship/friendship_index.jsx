import React from 'react';




class FriendshipIndex extends React.Component {

    componentDidMount() {
        this.props.fetchRequests();
    }


    render() {
        
        return (
            <div>
                    {
                        Object.values(this.props.friendships).map(request =>  <p key={request.id}  >{request["requester_id"]}</p> )
                    }
            </div>
        )
    }
}

export default FriendshipIndex;