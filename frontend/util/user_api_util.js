

export const showUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const fetchUsers = () => (
    $.ajax({
        url: '/api/users'
    })
);