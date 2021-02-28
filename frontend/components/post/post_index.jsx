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
                        Object.values(this.props.posts).map(post =>  <PostItem authorId={post.author_id} body={post.body} users={this.props.users} /> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>