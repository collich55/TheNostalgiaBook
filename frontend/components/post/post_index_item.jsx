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




class PostItem extends React.Component {


    constructor(props) {
        super(props)
        // this.state = {
        //     email: ""
        // }

    }

    


    proPicMaybe() {
        debugger
        let friendo = this.props.users[this.props.authorId];
        if (!friendo.profile_photo_link || friendo.profile_photo_link === "") {
            return <img className="post-pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
        } else {
            return <img className="post-pro-pic" src={friendo.profile_photo_link} alt="Pro Pic" />
        }

    }




    render() {
        
        let friend = this.props.users[this.props.authorId]
        let profile_pic = this.proPicMaybe();
        
        // if (this.props.users.friend_id.email !== undefined) {
        //     debugger
        //     email = this.props.users.friend_id.email;
        // }
        
        // this.setState({email: friend.email})
        return (
            <div className={"post-item-box"}>
                <div className="name-and-pic">
                    {profile_pic}
                    <a href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
                </div>
                <div>
                    {this.props.body}
                </div>                
            </div>
        )
    }
}

export default PostItem;