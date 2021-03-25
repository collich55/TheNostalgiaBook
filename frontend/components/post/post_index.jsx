import React from 'react';
import PostItem from './post_index_item';




class PostIndex extends React.Component {

    

    // componentDidMount() {
    //     this.props.fetchUsers();
    //     this.props.fetchRequests();
    //     this.props.fetchPosts();
    //     this.props.fetchComments();
    //     this.props.fetchLikes();

    //     this.setState();
    // }


    handleSituation () {



   


        if (this.props.situation && this.props.situation === "profile-show") {
            return Object.values(this.props.posts).filter(post => this.props.profileUserId == post.author_id || this.props.profileUserId == post.other_user_id).reverse().map(post => <PostItem
               key={post.id} fetchUsers={this.props.fetchUsers} fetchRequests={this.props.fetchRequests} fetchPosts={this.props.fetchPosts} fetchComments={this.props.fetchComments} fetchLikes={this.props.fetchLikes} deleteLike={this.props.deleteLike} newComment={this.props.newComment} likes={this.props.likes} newLike={this.props.newLike} post={post} currentUserId={this.props.currentUserId} authorId={post.author_id} body={post.body} users={this.props.users} />)
        } else {
            // return Object.values(this.props.posts).filter(post => this.props.currentUserId === post.author_id || this.props.currentUserId === post.other_user_id).reverse().map(post => <PostItem
            //      fetchUsers={this.props.fetchUsers} fetchRequests={this.props.fetchRequests} fetchPosts={this.props.fetchPosts} fetchComments={this.props.fetchComments} fetchLikes={this.props.fetchLikes} deleteLike={this.props.deleteLike} newComment={this.props.newComment} likes={this.props.likes} newLike={this.props.newLike} post={post} currentUserId={this.props.currentUserId} authorId={post.author_id} body={post.body} users={this.props.users} />)
            return Object.values(this.props.posts).reverse().map(post => <PostItem
                key={post.id} deletePost={this.props.deletePost} fetchUsers={this.props.fetchUsers} fetchRequests={this.props.fetchRequests} fetchPosts={this.props.fetchPosts} fetchComments={this.props.fetchComments} fetchLikes={this.props.fetchLikes} deleteLike={this.props.deleteLike} newComment={this.props.newComment} likes={this.props.likes} newLike={this.props.newLike} post={post} currentUserId={this.props.currentUserId} authorId={post.author_id} body={post.body} users={this.props.users} />)
        }

        // Object.values(this.props.posts).reverse().map(post => <PostItem deleteLike={this.props.deleteLike} newComment={this.props.newComment} likes={this.props.likes} newLike={this.props.newLike} post={post} currentUserId={this.props.currentUserId} authorId={post.author_id} body={post.body} users={this.props.users} />)



    }

    

    
    render() {



        if (Object.values(this.props.users).length < 3) {
            return null
        }


       
        
        return (
            <div>
                <ul  >


                    {
                        this.handleSituation()
                    }
                    
                        
                        
                    
                </ul>
            </div>
        )
    }
}

export default PostIndex


//<button onClick={() => deletePost(post.id)}></button>