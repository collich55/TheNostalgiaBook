import React from 'react';
import { showUser } from '../../actions/user_actions';
import usersReducer from '../../reducers/users_reducer';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';




class FriendshipItem extends React.Component {

    
    constructor(props){
        super(props)
    }

    

    nameDisplay() {
        if (this.props.requestee_id == this.props.userId) {
            return this.props.users[this.props.requester_id]
        } else {
            return this.props.users[this.props.requestee_id]
        }
    }



    render() {

        if (Object.values(this.props.users).length < 3) {
            return null
        }
        
        let friend = this.nameDisplay();
        let photo;
        if (!(friend.profile_photo_link) || friend.profile_photo_link === "") {
            photo = "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";
        } else {
            photo = friend.profile_photo_link;
        }

        return (
            <div id={"friend-item-box"}>
                

                <Link key={friend.id} replace to={`${friend.id}`} >
                    <div className="friendship-pro-pic-and-name">
                        <img className="friendship-pro-pic" src={friend.profile_photo_link} alt="Pro Pic" />
                        {friend.full_name + " " + friend.last_name}
                    </div>
                </Link>
                    
                
            </div>
        )
    }
}

export default FriendshipItem;