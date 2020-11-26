
import React from 'react';
import FriendshipIndexContainer from '../friendship/friendship_index_container'




class ProfileShow extends React.Component {

    componentDidMount() {
        debugger
        this.props.showUser(this.props.match.params.userId);
    }


    render() {
       
        return(
        <div>
            <h1>{this.props.fullName}</h1>
            <h2>{this.props.birthDate}</h2>
            <h2>{this.props.gender}</h2>
            <h2>{this.props.email}</h2>
            <FriendshipIndexContainer />
        
        </div>
        )
    }
}


export default ProfileShow;