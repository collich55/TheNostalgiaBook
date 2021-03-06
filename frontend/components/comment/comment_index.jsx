import React from 'react';
import CommentItem from './comment_index_item';




class CommentIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchComments();
    }

    

    
    render() {


        if (Object.values(this.props.users).length < 3) {
            return null
        }



       
        
        return (
            <div>
                <ul  >


                    {
                        Object.values(this.props.comments).filter(comment => comment.post_id === this.props.postId).map(comment =>  <CommentItem key={comment.id} currentUser={this.props.currentUser} comment={comment} editComment={this.props.editComment} deleteComment={this.props.deleteComment} postId={comment.post_id} commenterId={comment.commenter_id} body={comment.body} users={this.props.users} /> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default CommentIndex


//<button onClick={() => deleteComment(comment.id)}></button>