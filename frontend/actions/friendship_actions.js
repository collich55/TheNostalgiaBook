import * as APIUtil from '../util/friendship_api_util';



export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

// export const DELETE_REQUEST = 'DELETE_REQUEST';


const receiveRequests = requests => ({
    type: RECEIVE_REQUESTS,
    requests
});

const receiveRequest = request => ({
    type: RECEIVE_REQUEST,
    request
});

const removeRequest = requestId => ({
    type: REMOVE_REQUEST,
    requestId
})

// const removeRequest = requestId => ({
//     type: DELETE_REQUEST,
//     requestId
// });


export const createRequest = friendship => dispatch => {

    debugger

    return APIUtil.createRequest(friendship)
    .then(request => (dispatch(receiveRequest(request)))
    )
};

// export const deleteRequest = requestId => dispatch => (
//     APIUtil.deleteRequest(requestId)
//     .then(() => (dispatch(removeRequest(requestId)))
//     )
// );

export const fetchRequests = () => dispatch => {
    return (APIUtil.fetchRequests())
        .then(requests => (dispatch(receiveRequests(requests)))
    )
};

export const deleteRequest = requestId => dispatch => {
    debugger
    return (APIUtil.destroyRequest(requestId))
        .then(() => (dispatch(removeRequest(requestId))))
}


