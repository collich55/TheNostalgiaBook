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

    handleCommentButtons() {
        if (this.props.currentUser.id === this.props.comment.commenter_id) {
            return <div className={"comment-buttons"}>
                <button className="delete-comment-button" onClick={() => this.props.editComment(this.props.comment)} ><i class="far fa-edit"></i></button>
                <button className="edit-comment-button" onClick={() => this.props.deleteComment(this.props.comment.id)} ><i class="far fa-trash-alt"></i></button>
            </div>
        } else {
            return null
        }
    }




    render() {
        
        let friend = this.props.users[this.props.commenterId]
        let profile_pic = this.proPicMaybe();
        let comment_buttons = this.handleCommentButtons();

        if (Object.values(this.props.users).length < 3) {
            return null
        }


        if (!friend) {
            return null
        }

        
        return (
            <div>
                <div className="name-and-pic">
                    {profile_pic}
                    <div className="comment-item-box" >
                        <div className="comment-name-and-buttons">
                            <a className="post-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
                            {comment_buttons}
                        </div>
                        <p className="comment-text" >{this.props.body}</p>
                    </div>
                </div>        
            </div>
        )
    }
}

export default CommentItem;