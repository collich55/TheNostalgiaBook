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
import LikeIndexContainer from '../like/like_index_container'
import '@fortawesome/fontawesome-free/js/all.js';




class PostItem extends React.Component {


    constructor(props) {
        super(props)
        // this.state = {
        //     email: ""
        // }

    }

    


    proPicMaybe() {
        
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


    handleLikeButton () {

        let currentUserLikedPost = Object.values(this.props.likes).some(like => ((like.post_id === this.props.post.id) && (like.liker_id === this.props.currentUserId)));

        
        
        if (currentUserLikedPost) {
            return <button className="like-button-activated" onClick={() => this.props.newLike({ liker_id: this.props.currentUserId, post_id: this.props.post.id })}>
                <i class="far fa-thumbs-up"></i> Like
            </button>
        } else {
            return <button className="like-button" onClick={() => this.props.newLike({ liker_id: this.props.currentUserId, post_id: this.props.post.id })}>
                <i class="far fa-thumbs-up"></i> Like
            </button>
        }

    }

    handlePostNameText() {

        let friend = this.props.users[this.props.authorId];

        if (post.other_user_id && post.other_user_id != null){

            let other_user = this.props.users[post.other_user_id];

            <a className="post-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name + " TO " + other_user.full_name + " " + other_user.last_name}</a>
        } else {
            <a className="post-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
        }
    }




    render() {
        
        let friend = this.props.users[this.props.authorId]
        let profile_pic = this.proPicMaybe();
        

        
        return (
            <div className={"post-item-box"}>
                <div className="name-and-pic">
                    {profile_pic}
                    <div className="name-and-date" >
                        {this.handlePostNameText()}
                        <p className="date-text" >{this.postDate()}</p>
                    </div>
                </div>




                <div className="post-body">
                    {this.props.body}
                </div>

                <div>
                    <LikeIndexContainer postId={this.props.post.id} users={this.props.users} />
                </div>

                

                <div className="like-and-comment-buttons">
                    
                    {this.handleLikeButton()}

                    <button className="comment-button" onClick={() => this.props.newComment(this.props.post.id)}>
                        <i class="far fa-comment"></i> Comment
                    </button>


                </div>


                <div>
                    <CommentIndexContainer postId={this.props.post.id} users={this.props.users} />
                </div>                
            </div>
        )
    }
}

export default PostItem;