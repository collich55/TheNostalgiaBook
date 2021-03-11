export const createLike = like => {
    
    return (
        $.ajax({
            method: 'POST',
            url: '/api/likes',
            data: { like }
        })
    )
};

export const deleteLike = data => {

    debugger

    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${data.likeId.id}`
    })
};

export const fetchLikes = () => (
    $.ajax({
        url: '/api/likes'
    })
);

