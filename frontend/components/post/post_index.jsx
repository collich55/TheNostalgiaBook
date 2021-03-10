import React from 'react';
import PostItem from './post_index_item';




class PostIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchPosts();
    }

    

    
    render() {



       
        
        return (
            <div>
                <ul  >


                    {
                        Object.values(this.props.posts).map(post =>  <PostItem newComment={this.props.newComment} newLike={this.props.newLike} post={post} currentUserId={this.props.currentUserId} authorId={post.author_id} body={post.body} users={this.props.users} /> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>