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

    // componentDidMount() {
    //     this.props.fetchUsers();
    //     this.props.fetchRequests();
    //     this.props.fetchPosts();
    //     this.props.fetchComments();
    //     this.props.fetchLikes();

    //     this.setState();
    // }

    


    proPicMaybe() {

        
        let friendo = this.props.users[this.props.authorId];

        if (!friendo) {
            return false 
        }

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
        let likeObjectId


        
        if (currentUserLikedPost) {
            likeObjectId = Object.values(this.props.likes).filter(like => ((like.post_id === this.props.post.id) && (like.liker_id === this.props.currentUserId)))[0];
            return <button className="like-button-activated" onClick={() => this.props.deleteLike({ likeId: likeObjectId})}>
                <i className="far fa-thumbs-up"></i> Like
            </button>
        } else {
            return <button className="like-button" onClick={() => this.props.newLike({ liker_id: this.props.currentUserId, post_id: this.props.post.id })}>
                <i className="far fa-thumbs-up"></i> Like
            </button>
        }

    }

    

    handlePostNameText() {

        let friend = this.props.users[this.props.authorId];
        

        if (!friend) {
            return null
        }


        
        

        if (this.props.post.other_user_id && this.props.post.other_user_id !== null){

            let other_user = this.props.users[this.props.post.other_user_id];

            if (!other_user) {
                return null
            }

            let friend_without_arrow = friend.full_name + " " + friend.last_name;
            // let arrow_icon = <i class="fas fa-caret-right"></i>;
            // arrow_icon = <p>{Object.values(arrow_icon)[0]}</p>;

            return <div>
                <a className="post-name-text" href={`#/users/${friend.id}`}>{friend_without_arrow}</a>
                <i id={"arrow-icon"} class="fas fa-caret-right"></i> 
                <a className="post-name-text" href={`#/users/${other_user.id}`}>{other_user.full_name + " " + other_user.last_name}</a>
            </div>
        } else {
            return <a className="post-name-text" href={`#/users/${friend.id}`}  >{friend.full_name + " " + friend.last_name}</a>
        }
    }




    render() {

        if (Object.values(this.props.users).length < 3) {
            return null
        }
        
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
                    <button className="edit-post-button" onClick={() => this.props.deletePost(this.props.post.id)} ><i class="far fa-edit"></i></button>
                    <button className="delete-post-button" onClick={() => this.props.deletePost(this.props.post.id)} ><i class="far fa-trash-alt"></i></button>
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
                        <i className="far fa-comment"></i> Comment
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