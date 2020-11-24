export const RECEIVE_USER = 'RECEIVE_USER';

import * as APIUtil from '../util/user_api_util';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});



export const showUser = userId => dispatch => (
    APIUtil.showUser(userId)
    .then(user => (dispatch(receiveUser(user))))
)
