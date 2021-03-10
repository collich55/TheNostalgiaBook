import * as APIUtil from '../util/comment_api_util';



export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
});

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then(comment => (dispatch(receiveComment(comment))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteComment = commentId => dispatch => (
    APIUtil.deleteComment(commentId)
        .then(() => (dispatch(removeComment(commentId))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const fetchComments = () => dispatch => {
    
    return (APIUtil.fetchComments()
        .then(comments => (dispatch(receiveComments(comments))), err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
};


