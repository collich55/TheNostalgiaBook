import { RECEIVE_REQUEST, RECEIVE_REQUESTS } from "../actions/friendship_actions";

const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    

    switch (action.type) {
        case RECEIVE_REQUESTS:
           
            return action.requests
        case RECEIVE_REQUEST:
            // if (newState[action.request.id]) {
            newState[action.request.id] = action.request;
            return newState;
            // } else {
            //     return state
            // }
        // case DELETE_REQUEST:
        //     delete newState[action.request.id];
        //     return newState;
        default:
            return state;
    }
};

export default friendshipsReducer;


