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
import CommentIndexContainer from '../comment/comment_index_container'




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

    postDate() {
        let date = this.props.post.created_at;
        date = new Date(date);
        date = date.toDateString();
        return date
    }




    render() {
        
        let friend = this.props.users[this.props.authorId]
        let profile_pic = this.proPicMaybe();
        debugger

        
        return (
            <div className={"post-item-box"}>
                <div className="name-and-pic">
                    {profile_pic}
                    <div className="name-and-date" >
                        <a className="post-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
                        <p className="date-text" >{this.postDate()}</p>
                    </div>
                </div>
                <div className="post-body">
                    {this.props.body}
                </div>


                <div className="new-post">

                    

                    <button className="new-post-button" onClick={() => this.props.newComment(this.props.post.id)}>
                        leave comment?
                    </button>

                </div>

                <div className="new-post">

                    

                    <button className="new-post-button" onClick={() => this.props.newLike({liker_id: this.props.currentUserId, post_id: this.props.post.id })}>
                        leave like?
                    </button>

                </div>


                <div>
                    <CommentIndexContainer users={this.props.users} />
                </div>                
            </div>
        )
    }
}

export default PostItem;