export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => {

    debugger
    
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
};

export const update = user => {

    debugger

    return $.ajax({
        method: 'UPDATE',
        url: `/api/users/${user.id}`,
        data: { user }
    })
};

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

