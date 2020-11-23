import React from 'react';




class PostIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchPosts();
    }

    
    render() {

        debugger
        
        return (
            <div>
                <ul>


                    {
                        Object.values(this.props.posts).map(post =>  <p>{post["body"]}</p> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>