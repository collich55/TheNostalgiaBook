import React from 'react';
import CommentItem from './comment_index_item';




class CommentIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchComments();
    }

    

    
    render() {



       
        
        return (
            <div>
                <ul  >


                    {
                        // Object.values(this.props.comments).map(comment =>  <CommentItem comment={comment} authorId={comment.author_id} body={comment.body} users={this.props.users} /> )
                        Object.values(this.props.comments).map(comment =>  <p>{comment.body}</p> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default CommentIndex


//<button onClick={() => deleteComment(comment.id)}></button>