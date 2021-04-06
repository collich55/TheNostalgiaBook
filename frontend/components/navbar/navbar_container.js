import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Bar from './navbar';
import { showUser, fetchUsers } from "../../actions/user_actions.js";
// import gitlogo from '../../../Git-Icon-1788C.png'
// import linklogo from '../../../LI-In-Bug.png'

const mapStateToProps = ({ session, entities: { users } }) => {
    
    return {
        currentUser: users[session.id]
    
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),

    // git: (
    //     <img alt="icon" src={gitlogo} height={40} width={40}></img>
    // ),
    // link: (
    //     <img alt="icon" src={linklogo} width={40} height={40} ></img>
    // )
});

export default connect(mapStateToProps, mapDispatchToProps)(Bar);