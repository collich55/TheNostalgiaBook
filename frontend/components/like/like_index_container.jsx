import LikeIndex from "./like_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchLikes } from "../../actions/like_actions.js";


const mapStateToProps = (state) => {
    return ({
        errors: state.errors.likes,
        likes: state.entities.likes,
        users: state.entities.users
        
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchLikes: () => dispatch(fetchLikes())
        
    });
};

// deleteLike: likeId => dispatch(deleteLike(likeId))




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LikeIndex);


