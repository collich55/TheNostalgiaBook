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
                <div>
                    {

                        <Link key={friend.id} replace to={`${friend.id}`} >{friend.full_name}</Link>

                    }
                </div>

                {/* <button onClick={this.props.deleteRequest(friend.id)} >Reject</button> */}

            </div>
        )
    }
}

export default PendingFriendshipItem;