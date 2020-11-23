import React from 'react';




class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts, deletePost} = this.props;
        return (
            <div>
                <ul>
                    {
                        
                        posts.map( post => <p>{post.body}</p>  )
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>