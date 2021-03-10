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




class CommentItem extends React.Component {


    constructor(props) {
        super(props)
        // this.state = {
        //     email: ""
        // }

    }

    


    proPicMaybe() {
        
        let friendo = this.props.users[this.props.commenterId];
        if (!friendo.profile_photo_link || friendo.profile_photo_link === "") {
            return <img className="post-pro-pic" src={"https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"} alt="Pro Pic" />
        } else {
            return <img className="post-pro-pic" src={friendo.profile_photo_link} alt="Pro Pic" />
        }

    }

    commentDate() {
        let date = this.props.comment.created_at;
        date = new Date(date);
        date = date.toDateString();
        return date
    }




    render() {
        
        let friend = this.props.users[this.props.commenterId]
        let profile_pic = this.proPicMaybe();

        
        return (
            <div>
                <div className="name-and-pic">
                    {profile_pic}
                    <div className="comment-item-box" >
                        <a className="post-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
                        <p className="comment-text" >{this.props.body}</p>
                    </div>
                </div>        
            </div>
        )
    }
}

export default CommentItem;