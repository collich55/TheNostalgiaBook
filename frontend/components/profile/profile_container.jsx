import ProfileShow from "./profile_show.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRequests, createRequest, deleteRequest } from '../../actions/friendship_actions';
import { fetchPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { showUser, fetchUsers } from "../../actions/user_actions.js";
import { fetchLikes } from "../../actions/like_actions.js";
import { fetchComments } from "../../actions/comment_actions.js";


const mapStateToProps = (state, ownProps) => {

    // if (Object.values(state.entities.users) > 0) {
      
        return ({
            // email: state.entities.users[ownProps.match.params.userId].email,
            // fullName: state.entities.users[ownProps.match.params.userId].full_name,
            // birthDate: state.entities.users[ownProps.match.params.userId].birth_date,
            // gender: state.entities.users[ownProps.match.params.userId].gender,
            // userId: state.entities.users[ownProps.match.params.userId].id
            users: state.entities.users,
            userId: ownProps.match.params.userId,
            profileUser: state.entities.users[ownProps.match.params.userId],
            friendships: state.entities.friendships,
            posts: state.entities.posts,
            currentUserId: state.session.id,
            currentUser: state.entities.users[state.session.id]
        })
    // } else {
    //     return {}
    // }

};

const mapDispatchToProps = dispatch => {
    return ({
        showUser: userId => dispatch(showUser(userId)),

        fetchUsers: () => dispatch(fetchUsers()),
        fetchRequests: () => dispatch(fetchRequests()),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchLikes: () => dispatch(fetchLikes()),
        fetchComments: () => dispatch(fetchComments()),

        createRequest: info => dispatch(createRequest(info)),
        deleteRequest: requestId => dispatch(deleteRequest(requestId)),
        updateForm: (
            <button className="update-button" onClick={() => dispatch(openModal('update'))}>
                Edit Details
            </button>
        ),
        newPost: data => dispatch(openModal(data)),
        openModal: () => dispatch(openModal('update'))



    });
};




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileShow);


