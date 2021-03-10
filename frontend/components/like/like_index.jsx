import React from 'react';
import LikeItem from './like_index_item';




class LikeIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchLikes();
    }

    handleLikes () {
        // Object.values(this.props.likes).map(like => <LikeItem like={like} authorId={like.author_id} body={like.body} users={this.props.users} />)
        let likesForPost = Object.values(this.props.likes).filter(like => like.post_id === this.props.postId);
        if (likesForPost.length > 0) {
            return <p>{likesForPost[0].liker_id}</p>
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