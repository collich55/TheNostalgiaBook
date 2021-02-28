
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'
import PostIndexContainer from '../post/post_index_container'




class HomepageShow extends React.Component {

    constructor(props) {
        super(props)
        // this.handleFriendRequest = this.handleFriendRequest.bind(this)
        // this.handleFriendAcceptance = this.handleFriendAcceptance.bind(this)
        // this.handleUnfriend = this.handleUnfriend.bind(this)
    }

    componentDidMount() {
       
        this.props.fetchUsers();
        this.props.fetchRequests();
        // this.props.fetchPosts();
        
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

  



 

    



   

   

    


    render() {

    //    const {full_name, birth_date, gender, email} = this.props.users[this.props.userId]
        

    //    if (!full_name) {
    //        full_name = "temp"
    //    }
        return(
        <div id={"pro-page"}>

            
           
        

            <br/>
            <br/>
            <br/>

           
            <br/>
            <div className="timeline">
                <div className="new-post">
                    <h1>Posts:</h1>
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