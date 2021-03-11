import React from 'react';
import LikeItem from './like_index_item';




class LikeIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchLikes();
    }



    handleLikes () {
        // Object.values(this.props.likes).map(like => <LikeItem like={like} authorId={like.author_id} body={like.body} users={this.props.users} />)
        
        let likesForPost = Object.values(this.props.likes).reverse().filter(like => like.post_id === this.props.postId);
        let likesForPostLengthMinusTwo = likesForPost.length - 2;
        if (likesForPost.length === 0) {
            return null
        } else if (likesForPost.length === 1) {
            return <p className="like-text"><i id={"like-text-thumbs-up"} class="fas fa-thumbs-up"></i>{" " + this.props.users[likesForPost[0].liker_id].full_name + " " + this.props.users[likesForPost[0].liker_id].last_name + " liked this post"}</p>
        } else if (likesForPost.length === 2) {
            return <p className="like-text"><i id={"like-text-thumbs-up"} class="fas fa-thumbs-up"></i>{" " + this.props.users[likesForPost[0].liker_id].full_name + " " + this.props.users[likesForPost[0].liker_id].last_name + " and " + this.props.users[likesForPost[1].liker_id].full_name + " " + this.props.users[likesForPost[1].liker_id].last_name + " liked this post"}</p>
        } else if (likesForPost.length === 3) {
            return <p className="like-text"><i id={"like-text-thumbs-up"} class="fas fa-thumbs-up"></i>{" " + this.props.users[likesForPost[0].liker_id].full_name + " " + this.props.users[likesForPost[0].liker_id].last_name + ", " + this.props.users[likesForPost[1].liker_id].full_name + " " + this.props.users[likesForPost[1].liker_id].last_name + " and " + this.props.users[likesForPost[2].liker_id].full_name + " " + this.props.users[likesForPost[2].liker_id].last_name + " liked this post"}</p>
        } else if (likesForPost.length >= 4) {
            return <p className="like-text"><i id={"like-text-thumbs-up"} class="fas fa-thumbs-up"></i>{" " + this.props.users[likesForPost[0].liker_id].full_name + " " + this.props.users[likesForPost[0].liker_id].last_name + ", " + this.props.users[likesForPost[1].liker_id].full_name + " " + this.props.users[likesForPost[1].liker_id].last_name + " and " + likesForPostLengthMinusTwo + " others liked this post"}</p>
        } else {
            return null
        }
    }

    

    
    render() {



       
        
        return (
            <div>
                <ul  >


                    {
                        this.handleLikes()
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default LikeIndex


//<button onClick={() => deleteLike(like.id)}></button>