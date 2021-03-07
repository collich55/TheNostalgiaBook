import HomepageShow from "./homepage_show.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRequests, createRequest, deleteRequest } from '../../actions/friendship_actions';
import { createPost } from '../../actions/post_actions';
import { fetchPosts } from '../../actions/post_actions';

import { showUser, fetchUsers } from "../../actions/user_actions.js";
import { openModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        users: state.entities.users,
        friendships: state.entities.friendships,
        posts: state.entities.posts,
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        showUser: userId => dispatch(showUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchRequests: () => dispatch(fetchRequests()),
        fetchPosts: () => dispatch(fetchPosts()),
        createRequest: info => dispatch(createRequest(info)),
        deleteRequest: requestId => dispatch(deleteRequest(requestId)),
        createRequest: info => dispatch(createRequest(info)),
        newPost: () => dispatch(openModal('new-post'))
        
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomepageShow);
