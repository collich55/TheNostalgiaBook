export const createPost = post => {
    
    return (
        $.ajax({
            method: 'POST',
            url: '/api/posts',
            data: { post }
        })
    )
};

export const deletePost = postId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
};

export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts'
    })
);

export const update = post => {


    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    })
};

