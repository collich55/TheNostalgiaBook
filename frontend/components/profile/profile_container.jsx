import ProfileShow from "./profile_show.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRequests, createRequest } from '../../actions/friendship_actions';

import { showUser, fetchUsers } from "../../actions/user_actions.js";


const mapStateToProps = (state, ownProps) => {

    // if (Object.values(state.entities.users) > 0) {
        debugger
        return ({
            // email: state.entities.users[ownProps.match.params.userId].email,
            // fullName: state.entities.users[ownProps.match.params.userId].full_name,
            // birthDate: state.entities.users[ownProps.match.params.userId].birth_date,
            // gender: state.entities.users[ownProps.match.params.userId].gender,
            // userId: state.entities.users[ownProps.match.params.userId].id
            users: state.entities.users,
            userId: ownProps.match.params.userId,
            friendships: state.entities.friendships,
            currentUserId: state.session.id
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
        createRequest: info => dispatch(createRequest(info))


    });
};




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileShow);


// create_table "users", force: : cascade do | t |
//     t.string "full_name", null: false
// t.string "email", null: false
// t.string "session_token", null: false
// t.string "password_digest", null: false
// t.string "location"
// t.string "school"
// t.string "gender", null: false
// t.string "birth_date", null: false
// t.text "written_bio"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.index["email"], name: "index_users_on_email", unique: true
// t.index["full_name"], name: "index_users_on_full_name"
// t.index["session_token"], name: "index_users_on_session_token", unique: true