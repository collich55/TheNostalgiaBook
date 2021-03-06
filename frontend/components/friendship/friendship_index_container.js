import { connect } from 'react-redux';

import { fetchRequests } from '../../actions/friendship_actions';
import { showUser } from '../../actions/user_actions';

import FriendshipIndex from './friendship_index';

const mapStateToProps = ({ session, entities: { users, friendships } }) => {

  
    
    return {
        currentUser: users[session.id],
        friendships: friendships,
        users: state.entities.users,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRequests: () => dispatch(fetchRequests()),
    showUser: userId => dispatch(showUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex);