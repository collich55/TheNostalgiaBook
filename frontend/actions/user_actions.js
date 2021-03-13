export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER'

import * as APIUtil from '../util/user_api_util';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});



// export const updateUser = user => dispatch => {
//     return (APIUtil.update(user)
//         .then(user => (dispatch(receiveCurrentUser(user)))), err => (
//             dispatch(receiveErrors(err.responseJSON))
//         )
//     )
// };









export const showUser = userId => dispatch => (
    APIUtil.showUser(userId)
    .then(user => (dispatch(receiveUser(user))))
)


export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then(users => (dispatch(receiveUsers(users))))
)
