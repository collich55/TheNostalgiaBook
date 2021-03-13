import * as APIUtil from '../util/post_api_util';



export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

const removePost = postId => ({
    type: DELETE_POST,
    postId
});

const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const createPost = post => dispatch => (
    APIUtil.createPost(post)
        .then(post => (dispatch(receivePost(post))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

// export const deletePost = postId => dispatch => (
//     APIUtil.deletePost(postId)
//         .then(() => (dispatch(removePost(postId))), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         ))
// );

export const fetchPosts = () => dispatch => {
    
    return (APIUtil.fetchPosts()
        .then(posts => (dispatch(receivePosts(posts))), err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
};


