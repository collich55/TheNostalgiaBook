import { RECEIVE_LIKE, DELETE_LIKE, RECEIVE_LIKES } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    
    
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes
        case RECEIVE_LIKE:
                newState[action.like.id] = action.like;
                return newState;
        case DELETE_LIKE:
            delete newState[action.likeId.likeId.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;


