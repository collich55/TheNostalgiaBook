
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'




class ProfileShow extends React.Component {

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

    


    render() {
       debugger
    //    const {full_name, birth_date, gender, email} = this.props.users[this.props.userId]
        
         const {full_name, gender, birth_date,  } = this.props.users[this.props.userId]

    //    if (!full_name) {
    //        full_name = "temp"
    //    }
        return(
        <div id={"pro-page"}>
            <div id={"name"}   >
                <h1>{full_name}</h1>
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

                <FriendshipIndexContainer />
            </div>
            
        
        </div>
        )
    }
}


export default ProfileShow;