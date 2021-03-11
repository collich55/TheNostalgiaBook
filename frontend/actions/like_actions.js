import * as APIUtil from '../util/like_api_util';



export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const DELETE_LIKE = 'DELETE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const removeLike = likeId => ({
    type: DELETE_LIKE,
    likeId
});

const receiveErrors = errors => ({
    type: RECEIVE_LIKE_ERRORS,
    errors
});

export const createLike = like => dispatch => (
    APIUtil.createLike(like)
        .then(like => (dispatch(receiveLike(like))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteLike = data => dispatch => {

    
    
    return APIUtil.deleteLike(data)
        .then(() => (dispatch(removeLike(data))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
};

export const fetchLikes = () => dispatch => {
    
    return (APIUtil.fetchLikes()
        .then(likes => (dispatch(receiveLikes(likes))), err => (
            dispatch(receiveErrors(err.responseJSON))
        )))
};


