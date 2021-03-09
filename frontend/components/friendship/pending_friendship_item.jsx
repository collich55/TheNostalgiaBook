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




class PendingFriendshipItem extends React.Component {


    constructor(props) {
        super(props)
        // this.state = {
        //     email: ""
        // }

    }

    // componentDidMount() {


    //     this.props.showUser(this.props.requestee_id)
    // }


    // emailTest() {
    //     debugger
    //     if (this.props.users.friend_id.email) {
    //         return this.props.users.friend_id.email;
    //     } else {
    //         debugger
    //         return "temp"
    //     }
    // }

    nameDisplay() {
        if (this.props.requestee_id == this.props.userId) {
            return this.props.users[this.props.requester_id]
        } else {
            return this.props.users[this.props.requestee_id]
        }
    }



    render() {
        debugger
        let friend = this.nameDisplay();

        debugger
        // if (this.props.users.friend_id.email !== undefined) {
        //     debugger
        //     email = this.props.users.friend_id.email;
        // }
        debugger
        // this.setState({email: friend.email})
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

export default PendingFriendshipItem;

{/* <Link key={friend.id} replace to={`${friend.id}`} >
    <img className="friendship-pro-pic" src={friend.profile_photo_link} alt="Pro Pic" />
</Link> */}