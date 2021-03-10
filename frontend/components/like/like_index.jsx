import React from 'react';
import LikeItem from './like_index_item';




class LikeIndex extends React.Component {

    

    componentDidMount() {
        this.props.fetchLikes();
    }

    

    
    render() {



       
        
        return (
            <div>
                <ul  >


                    {
                        Object.values(this.props.likes).map(like =>  <LikeItem like={like} authorId={like.author_id} body={like.body} users={this.props.users} /> )
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default LikeIndex


//<button onClick={() => deleteLike(like.id)}></button>