import { RECEIVE_POST, DELETE_POST, RECEIVE_POSTS } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            if (newState[action.post.id]) {
                newState[action.post.id] = action.post;
                return newState;
            } else {
                return state
            }
        case DELETE_POST:
            delete newState[action.post.id];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;


