import React from 'react';




class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts, deletePost, test} = this.props;
        
        return (
            <div>
                <ul>
                    
                        
                        <p>{test.body}</p>
                        <p>This might be working lol</p>
                    
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>