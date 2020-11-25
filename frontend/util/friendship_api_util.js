export const createRequest = request => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: { request }
    })
);

export const acceptRequest = request_id => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/friendships/${request_id}`
    })
};

export const fetchRequests = () => {
    return $.ajax({
        url: '/api/friendships'
    })
};

