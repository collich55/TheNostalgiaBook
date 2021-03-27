export const createComment = comment => {
    
    return (
        $.ajax({
            method: 'POST',
            url: '/api/comments',
            data: { comment }
        })
    )
};

export const deleteComment = commentId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
};

export const fetchComments = () => (
    $.ajax({
        url: '/api/comments'
    })
);

