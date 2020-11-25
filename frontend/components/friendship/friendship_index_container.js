import { connect } from 'react-redux';

import { fetchRequests } from '../../actions/friendship_actions';
import FriendshipIndex from './friendship_index';

const mapStateToProps = ({ session, entities: { users, friendships } }) => {

    console.log(friendships)

    return {
        currentUser: users[session.id],
        friendships: friendships
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRequests: () => dispatch(fetchRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex);