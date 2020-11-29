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



    render() {
        debugger
        let friend = this.props.users[this.props.requestee_id]
        debugger
        // if (this.props.users.friend_id.email !== undefined) {
        //     debugger
        //     email = this.props.users.friend_id.email;
        // }
        debugger
        // this.setState({email: friend.email})
        return (
            <div id={"friend-item-box"}>
                {
                
                <Link key={this.props.requestee_id} replace to={`${friend.id}`} >{friend.full_name}</Link>
                    
                }
            </div>
        )
    }
}

export default FriendshipItem;