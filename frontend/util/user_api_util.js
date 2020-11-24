//Bench.find(params[:id])

export const showUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);