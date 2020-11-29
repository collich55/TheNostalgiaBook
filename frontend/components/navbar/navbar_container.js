import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Bar from './navbar';
import { showUser, fetchUsers } from "../../actions/user_actions.js";

const mapStateToProps = ({ session, entities: { users } }) => {
    console.log(users)
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bar);