import { connect } from 'react-redux';

import { fetchRequests } from '../../actions/friendship_actions';
import { showUser } from '../../actions/user_actions';

import PendingFriendshipItem from './pending_friendship_item';

const mapStateToProps = ({ session, entities: { users, friendships } }) => {


    
    return {
        currentUser: users[session.id],
        friendships: friendships,
        users: users
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRequests: () => dispatch(fetchRequests()),
    showUser: userId => dispatch(showUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingFriendshipItem);