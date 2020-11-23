export const createPost = post => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: { post }
    })
);

export const deletePost = postId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
};

export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts',
    })
);

