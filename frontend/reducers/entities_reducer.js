import { combineReducers } from "redux";
// import postsReducer from "./posts_reducer";

import usersReducer from "./users_reducer";
import friendshipsReducer from "./friendships_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer

    // posts: postsReducer
});

export default entitiesReducer;
